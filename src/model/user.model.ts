
export class User {
  id: string = "";
  fullName: string = "";
  countryCode: string = "";
  phone: string = "";
  email: string = "";
  isEmailVerified: boolean = false;
  isPhoneVerified: boolean = false;
  status: string = "";
  role: any;
  createdAt: string = "";
  session: Token = new Token();
}

export class Token {
  accessToken: string = "";
  refreshToken: string = "";
}
