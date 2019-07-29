export interface ExampleData {
  log: { file: { path: string }; offset: number };
  service: { type: string };
  tags: string[];
  destination: {
    bytes: number;
    packets: number;
    geo: { city_name: string; country_iso_code: string; location: { lat: string; lon: string } };
    port: number;
    ip: string;
  };
  fileset: { name: string };
  agent: { type: string; hostname: string; ephemeral_id: string; id: string; version: string };
  event: {
    start: string;
    kind: string;
    end: string;
    severity: number;
    duration: number;
    outcome: string;
    module: string;
    dataset: string;
  };
  source: {
    bytes: number;
    packets: number;
    geo: { city_name: string; country_iso_code: string; location: { lat: string; lon: string } };
    port: number;
    ip: string;
  };
  host: {
    name: string;
    hostname: string;
    architecture: string;
    containerized: string;
    os: {
      kernel: string;
      name: string;
      family: string;
      platform: string;
      version: string;
      codename: string;
    };
    id: string;
  };
  ecs: { version: string };
  input: { type: string };
  message: string;
  request_path: { type: string; coordinates: number[][] };
  suricata: {
    eve: {
      tls: {
        fingerprint: string;
        version: string;
        sni: string;
        notbefore: number;
        serial: string;
        issuerdn: string;
        notafter: number;
        subject: string;
      };
      event_type: string;
      pcap_cnt: number;
      flow: {};
      tx_id: number;
      flow_id: number;
      alert: {
        category: string;
        signature_id: number;
        gid: number;
        rev: number;
        signature: string;
      };
    };
  };
  cloud: {
    machine: { type: string };
    instance: { name: string; id: string };
    provider: string;
    project: { id: string };
    availability_zone: string;
  };
  network: { bytes: number; protocol: string; packets: number; transport: string };
}
