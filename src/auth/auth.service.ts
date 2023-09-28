import {
  Injectable,
  Request,
  NotFoundException,
  HttpException,
  Inject,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as nodemailer from 'nodemailer'
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { userService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config'
interface userData {
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
}

interface login {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private user: userService, private jwt: JwtService,

    private readonly configurService: ConfigService
  ) { }

  async create(user: userData) {
    const newUser = await this.user.createUser(user);
    const payload = {
      id: newUser.id,
      username: newUser.username,
    };
    const { accessToken, refreshToken } = await this.generateToken(payload);
    await this.updateRefreshToken(newUser.id, refreshToken);
    return {
      accessToken,
      refreshToken,
    };
  }

  async login(loginData: login) {
    const { username, password } = loginData;
    const isUser = await this.user.findUser(username);
    if (!isUser) {
      throw new NotFoundException('user not found');
    }
    const isValidPassword = password == isUser.password;
    if (!isValidPassword) {
      throw new HttpException('user or password not matched', 404);
    }
    const { accessToken, refreshToken } = await this.generateToken({
      id: isUser.id,
      username: isUser.username,
    });
    await this.updateRefreshToken(isUser.id, refreshToken);
    return {
      accessToken,
      refreshToken,
    };
  }

  async refresh(id) {
    try {
      const [isUser] = await this.user.findById(id);

      const { accessToken, refreshToken } = await this.generateToken({
        id: id,
        username: isUser.username,
      });
      await this.updateRefreshToken(isUser.id, refreshToken);
      return {
        accessToken,
        refreshToken,
      };
    } catch (err) {
      throw err;
    }
  }

  async generateToken(payload) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload, { expiresIn: '1d' }),
      await this.jwt.signAsync(payload, { expiresIn: '7d', secret: 'hdfc' }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  async updateRefreshToken(id, refreshToken: string) {
    try {
      await this.user.updateUser(id, { refreshToken });
    } catch (err) {
      throw err;
    }
  }

  async mailSendor(email: string) {
    try {
      const { password } = await this.user.findUser(email)
      const transport = nodemailer.createTransport({
        host: 'mail.sabafashion.in',
        port: 465,
        secure: true,
        auth: {
          user: this.configurService.get('mailUser'),
          pass: this.configurService.get('mailPassword')
        }
      })
      const mailOption: MailOptions = {
        from: this.configurService.get('mailUser'),
        to: email,
        subject: "Forgot Password ",
        html: ` <div style="bgcolor:white"}>
           <h1 style="color:#42526f">Trouble Signing in?</h1>
            <p>We have recieved a request to retrieve the password for your account .Below is your
             requested password.
            </P> 
            <p style="color:blue">Password: ${password}</p>
         <p>If you do not initialize this request.please disregard this email.</p>
         <p>Thanks</p>
         <div>`
      }
      transport.sendMail(mailOption)
    } catch (error) {
      throw (error)
    }
  }

  async changePassword(password) {
    const user = await this.user.findAllUser();
    return this.user.updateUser(user[0].id, password);
  }
} 
