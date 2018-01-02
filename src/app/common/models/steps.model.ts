export interface WirelessDetails {
  wirelessNumber?: string;
  customerType?: boolean;
  imeiNumber?: string;
  make?: string;
  model?: string;
}

export interface CustomerAccountDetails {
  firstName?: string;
  lastName?: string;
  wirelessNumber?: string;
  email?: string;
  mulitaryPersonnel?: boolean;
}

export interface ImeiContactDetails {
  firstName?: string;
  lastName?: string;
  wirelessNumber?: string;
  email?: string;
}

export interface User {
  wirelessDetails?: WirelessDetails;
  customerAccountDetails?: CustomerAccountDetails;
  imeiContactDetails?: ImeiContactDetails;
}
