import { sample } from 'lodash';
import { ExampleData } from './index.d';
import {
  log_file_path,
  destination_port,
  fileset_name,
  host_hostname,
  host_architecture,
  host_os_kernal,
  host_os_name,
  host_os_platform,
  host_os_version,
  host_os_codename,
  log_message,
} from './fields';

interface CityData {
  country: string;
  lat: string;
  lng: string;
  name: string;
}

const location_data: { src: CityData[]; dest: CityData[] } = require('./cities.json');
const { src: src_cities, dest: dest_cities } = location_data;

export const getExampleJson = (): ExampleData => {
  const src = sample(src_cities);
  const dest = sample(dest_cities);

  return {
    log: {
      file: {
        path: sample(log_file_path),
      },
      offset: 349803948,
    },
    service: {
      type: 'suricata',
    },
    tags: ['suricata'],
    destination: {
      bytes: 25006,
      packets: 43,
      geo: {
        city_name: dest.name,
        country_iso_code: dest.country,
        location: {
          lat: dest.lat,
          lon: dest.lng,
        },
      },
      port: sample(destination_port),
      ip: '193.50.176.156',
    },
    fileset: {
      name: sample(fileset_name),
    },
    agent: {
      type: 'filebeat',
      hostname: sample(host_hostname),
      ephemeral_id: '83ff25fd-2e9e-4b7d-a53f-0fc8625b1cf6',
      id: '24354bfd-8798-4539-8e66-d787e7da924c',
      version: '7.0.0',
    },
    event: {
      start: '2019-09-13T14:08:13.740389Z',
      kind: 'event',
      end: '2019-09-20T07:32:13.740389Z',
      severity: sample([1, 2, 3, 4, 5]),
      duration: 581040,
      outcome: 'allowed',
      module: 'suricata',
      dataset: 'suricata.eve',
    },
    source: {
      bytes: 91200,
      packets: 40,
      geo: {
        city_name: src.name,
        country_iso_code: src.country,
        location: {
          lat: src.lat,
          lon: src.lng,
        },
      },
      port: 3,
      ip: '199.151.51.212',
    },
    host: {
      name: 'suricata-ems',
      hostname: sample(host_hostname),
      architecture: sample(host_architecture),
      containerized: 'false',
      os: {
        kernel: sample(host_os_kernal),
        name: sample(host_os_name),
        family: 'debian',
        platform: sample(host_os_platform),
        version: sample(host_os_version),
        codename: sample(host_os_codename),
      },
      id: 'dc60161b460249929304f8c500c80cdb',
    },
    ecs: {
      version: '1.0.0',
    },
    input: {
      type: 'log',
    },
    message: sample(log_message),
    request_path: {
      type: 'linestring',
      coordinates: [[-122.71446, 47.72274], [-118.243683, 34.052235]],
    },
    suricata: {
      eve: {
        tls: {
          fingerprint: 'E8:20:7A:27:8C:BE:D4:D9:7F:44:32:89:E7:6B:13:DD:CE:58:50:F6',
          version: 'TLS 1.2',
          sni: 'api.ipify.org',
          notbefore: 1520453015000,
          serial: '79:1A:83:83:21:20:F6:6D:9D:1E:77:5F:ED:89:16:FC:8E:A0:E0:C3',
          issuerdn:
            'C=US, ST=New York, L=Brooklyn, O=COMODO CA Limited, CN=COMODO RSA Organization Validation Secure Server CA',
          notafter: 1527706380000,
          subject: 'C=US, ST=California, L=Mountain View, O=Google LLC, CN=edgestatic.com',
        },
        event_type: 'fileinfo',
        pcap_cnt: 2006780,
        flow: {},
        alert: {
          category: 'Potential Corporate Privacy Violation',
          signature_id: 2001219,
          gid: 1,
          rev: 1,
          signature: 'SURICATA STREAM Packet with invalid timestamp',
        },
        tx_id: 2,
        flow_id: 2189347348354815,
      },
    },
    cloud: {
      machine: {
        type: 'projects/238712873821/machineTypes/n1-standard-1',
      },
      instance: {
        name: 'suricata-ems',
        id: '2982319812023902193',
      },
      provider: 'gce',
      project: {
        id: 'elastic-beats',
      },
      availability_zone: 'projects/238712873821/zones/us-east1-b',
    },
    network: {
      bytes: 65668,
      protocol: 'tls',
      packets: 41,
      transport: 'dns',
    },
  };
};
