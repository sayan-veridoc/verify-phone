export interface VerifyPhoneAPIResp {
  status: string;
  phone: string;
  phone_valid: boolean;
  phone_type: string;
  phone_region: string;
  country: string;
  country_code: string;
  country_prefix: string;
  international_number: string;
  local_number: string;
  e164: string;
  carrier: string;
}
export interface ResponseData {
  message: string;
  data: VerifyPhoneAPIResp;
  statusCode: number;
}
