export class DataPoint {
  api?: string;
  url?: string;
  requestData?: any;
  timeout?: number;
}

export enum APIs {
  ADMIN_SERVICE = 'Admin',
  SECURITY_SERVICE = 'SecurityServices',
  PUBLISHER_SERVICE = 'Publisher',
  ADVERTISER_SERVICE = 'Advertiser',
  ADVERTISER_REPORT_SERVICE = 'AdvertiserReporting',
  AVAILS_SERVICE = 'Avails',
  HCP_TRIGGER_SERVICE = 'Hcp365Trigger'
}
