// fake suricata data
export const agent_hostname = [
  'suricata-tokyo',
  'suricata-saopaulo',
  'suricata-ashburn',
  'suricata-losangeles',
  'suricata-frankfurt',
];
export const log_file_path = [
  '/var/log/bro/current/conn.log',
  '/var/log/suricata/eve.json',
  '/var/log/auth.log',
  '/home/tsg/suricata-logs/logs/eve-result.json',
  '/var/log/bro/current/dns.log',
  '/var/log/bro/current/http.log',
  '/var/log/bro/current/notice.log',
  '/var/log/bro/current/ssl.log',
];
export const destination_port = [80, 22, 445, 23, 59919, 49905];
export const source_port = [443, 80, 8883, 5223, 3, 123];
export const fileset_name = ['connection', 'eve', 'auth', 'dns', 'http', 'notice', 'ssl'];
export const log_message = [
  'Potential Corporate Privacy Violation',
  'Generic Protocol Command Decode',
  'Potentially Bad Traffic',
  'A Network Trojan was detected',
  'Attempted Information Leak',
  'Potential Corporate Privacy Violation',
];
export const network_protocol = [
  'http',
  'ssh',
  'failed',
  'tls',
  'ntp',
  'dns',
  'tftp',
  'ikev2',
  'krb5',
];
export const network_transport = ['tcp', 'udp', 'icmp', 'sctp'];
export const host_hostname = [
  'suricata-tokyo',
  'suricata-saopaulo',
  'suricata-ashburn',
  'suricata-losangeles',
  'suricata-frankfurt',
];
export const host_os_codename = ['bionic', 'stretch'];
export const host_os_kernal = ['4.15.0-45-generic', '4.14.50-v7+', '4.9.0-8-amd64'];
export const host_os_name = ['Ubuntu', 'Raspbian GNU/Linux', 'Debian GNU/Linux'];
export const host_os_version = ['18.04.2 LTS (Bionic Beaver)', '9 (stretch)'];
export const host_os_platform = ['ubuntu', 'raspbian', 'debian'];
export const host_architecture = ['x86_64', 'armv7l'];
export const suricata_eve_event_type = [
  'flow',
  'ssh',
  'alert',
  'dns',
  'http',
  'fileinfo',
  'tftp',
  'tls',
  'ikev2',
];
export const suricata_eve_alert_signature_id = [
  2402000,
  2260002,
  2018959,
  2001219,
  2210044,
  2500024,
  2011716,
  2008578,
  2010935,
  2210050,
];
export const suricata_eve_alert_signature = [
  'ET DROP Dshield Block Listed Source group 1',
  'SURICATA Applayer Detect protocol only one direction',
  'ET POLICY PE EXE or DLL Windows file download HTTP',
  'ET SCAN Potential SSH Scan',
  'SURICATA STREAM Packet with invalid timestamp',
  'ET COMPROMISED Known Compromised or Hostile Host Traffic group 13',
  'ET SCAN Sipvicious User-Agent Detected (friendly-scanner)',
  'ET SCAN Sipvicious Scan',
  'ET SCAN Suspicious inbound to MSSQL port 1433',
  'SURICATA STREAM reassembly overlap with different data',
];
export const suricata_eve_alert_category = [
  'Misc Attack',
  'Generic Protocol Command Decode',
  'Attempted Information Leak',
  'Potential Corporate Privacy Violation',
  'Potentially Bad Traffic',
  'Not Suspicious Traffic',
  'Decode of an RPC Query',
  'Misc activity',
  'A Network Trojan was detected',
  'Detection of a Network Scan',
];
export const suricata_eve_tls_not_before = [
  1543880167000,
  1494979200000,
  1520453015000,
  1548773880000,
  1548979200000,
];
export const suricata_eve_tls_not_after = [
  1638488167000,
  1526601599000,
  1527706380000,
  1556031480000,
  1558689900000,
];
export const suricata_eve_tls_fingerprint = [
  '15:9A:76:C5:AE:F4:90:15:79:E6:A4:99:96:C1:D6:A1:D9:3B:07:43',
  '18:91:80:9B:75:1F:19:27:BA:09:F8:3F:9F:3D:0E:A7:56:F4:ED:B7',
  'E8:20:7A:27:8C:BE:D4:D9:7F:44:32:89:E7:6B:13:DD:CE:58:50:F6',
  '58:3E:A1:CD:3F:46:D5:F9:4B:51:5D:55:8F:90:97:1B:65:6D:51:C3',
  'D0:E6:B8:EF:CF:34:D1:4E:D1:C7:5F:B9:DE:21:17:96:82:67:2B:EA',
  '0A:39:D8:A9:C5:8A:46:C8:88:6D:DB:3C:2E:41:70:B2:8E:F6:D6:5B',
  '62:84:F1:44:40:7C:FC:BF:E3:07:9C:59:E2:75:3A:1E:10:0C:29:86',
  'DE:9E:8E:5B:C0:D9:AD:A9:E8:C4:68:F4:76:DD:57:75:12:90:EB:D6',
  '79:1A:83:83:21:20:F6:6D:9D:1E:77:5F:ED:89:16:FC:8E:A0:E0:C3',
  '6A:0F:88:D6:2D:7A:CC:AF:24:01:B7:7A:7A:68:9C:9F:FD:76:C4:BE',
];
export const suricata_eve_tls_subject = [
  'CN=instance',
  'OU=Domain Control Validated, OU=PositiveSSL, CN=api.ipify.org',
  'C=US, ST=New York, L=Brooklyn, O=Google Inc, CN=*.google.com',
  'C=US, ST=California, L=Los Gatos, O=Netflix, Inc., OU=Content Delivery, CN=*.1.oca.nflxvideo.net',
  'C=US, ST=California, L=Mountain View, O=Google LLC, CN=edgestatic.com',
  'C=US, ST=California, L=Los Gatos, O=Netflix, Inc., OU=Content Delivery, CN=*.1.nflxso.net',
  'C=US, ST=New York, L=Brooklyn, O=Google LLC, CN=www.google.com',
  'C=KR, ST=Kyong-gi, O=Samsung Electronics, OU=Samsung Hubsite, CN=*.samsungcloudsolution.net',
  'C=US, ST=CA, L=Menlo Park, O=Facebook, Inc., CN=*.facebook.com',
  'C=US, ST=Illinois, L=Lisle, O=Kantar Operations, OU=Information Technology, CN=*.insightexpressai.com',
];
export const suricata_eve_tls_issuer = [
  'CN=Elastic Fakelogs',
  'C=GB, ST=Greater Manchester, L=Salford, O=COMODO CA Limited, CN=COMODO RSA Domain Validation Secure Server CA',
  'C=US, O=Google Trust Services, CN=Google Internet Authority G3',
  'C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA',
  'CN=Samsung Hubsite CA/O=Samsung Electronics/C=KR/ST=Kyong-gi/L=Suwon',
  'C=US, O=DigiCert Inc, OU=www.digicert.com, CN=DigiCert SHA2 High Assurance Server CA',
  'C=US, ST=New York, L=Brooklyn, O=COMODO CA Limited, CN=COMODO RSA Organization Validation Secure Server CA',
  'C=KR, ST=Gyeonggi do, L=Suwon, O=SAMSUNG ELECTRONICS CO., LTD, CN=*.push.samsungosp.com/emailAddress=admin@push.samsungosp.com',
  'C=US, O=DigiCert Inc, OU=www.digicert.com, CN=DigiCert SHA2 Extended Validation Server CA',
  "C=US, O=Let's Encrypt, CN=Let's Encrypt Authority X3",
];
export const suricata_eve_tls_serial = [
  '15:9A:76:C5:AE:F4:90:15:79:E6:A4:99:96:C1:D6:A1:D9:3B:07:43',
  '18:91:80:9B:75:1F:19:27:BA:09:F8:3F:9F:3D:0E:A7:56:F4:ED:B7',
  'E8:20:7A:27:8C:BE:D4:D9:7F:44:32:89:E7:6B:13:DD:CE:58:50:F6',
  '58:3E:A1:CD:3F:46:D5:F9:4B:51:5D:55:8F:90:97:1B:65:6D:51:C3',
  'D0:E6:B8:EF:CF:34:D1:4E:D1:C7:5F:B9:DE:21:17:96:82:67:2B:EA',
  '0A:39:D8:A9:C5:8A:46:C8:88:6D:DB:3C:2E:41:70:B2:8E:F6:D6:5B',
  '62:84:F1:44:40:7C:FC:BF:E3:07:9C:59:E2:75:3A:1E:10:0C:29:86',
  'DE:9E:8E:5B:C0:D9:AD:A9:E8:C4:68:F4:76:DD:57:75:12:90:EB:D6',
  '79:1A:83:83:21:20:F6:6D:9D:1E:77:5F:ED:89:16:FC:8E:A0:E0:C3',
  '6A:0F:88:D6:2D:7A:CC:AF:24:01:B7:7A:7A:68:9C:9F:FD:76:C4:BE',
];
