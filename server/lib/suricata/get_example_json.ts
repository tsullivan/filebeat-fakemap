import uuidv4 from 'uuid/v4';
import moment from 'moment';
import { sample } from 'lodash';
import { ExampleData } from './index.d';
import {
  log_file_path,
  destination_port,
  source_port,
  fileset_name,
  host_hostname,
  host_architecture,
  host_os_kernal,
  host_os_name,
  host_os_platform,
  host_os_version,
  host_os_codename,
  log_message,
  network_protocol,
  suricata_eve_event_type,
  suricata_eve_tls_not_before,
  suricata_eve_tls_serial,
  suricata_eve_tls_subject,
  suricata_eve_tls_issuer,
  suricata_eve_tls_not_after,
  suricata_eve_tls_fingerprint,
  suricata_eve_alert_signature_id,
  suricata_eve_alert_category,
  suricata_eve_alert_signature,
} from './fields';

interface CityData {
  country: string;
  lat: string;
  lng: string;
  name: string;
}

const location_data: { src: CityData[]; dest: CityData[] } = require('./cities.json');
const { src: src_cities, dest: dest_cities } = location_data as {
  src: CityData[];
  dest: CityData[];
};

function randomInRange(min: number, max: number) {
  return Math.floor(min + Math.random() * Math.floor(max));
}

export const getExampleJson = (): ExampleData => {
  const src = sample(src_cities);
  const dest = sample(dest_cities);
  const start_time = moment().subtract(Math.floor(Math.random() * 40), 'days');
  const end_time = moment();

  return {
    log: { file: { path: sample(log_file_path) }, offset: randomInRange(300000000, 400000000) },
    suricata: {
      eve: {
        tls: {
          notbefore: sample(suricata_eve_tls_not_before),
          serial: sample(suricata_eve_tls_serial),
          subject: sample(suricata_eve_tls_subject),
          issuerdn: sample(suricata_eve_tls_issuer),
          notafter: sample(suricata_eve_tls_not_after),
          fingerprint: sample(suricata_eve_tls_fingerprint),
          version: 'TLS 1.2',
          sni: 'api.ipify.org',
        },
        event_type: sample(suricata_eve_event_type),
        pcap_cnt: randomInRange(2000000, 3000000),
        flow: {},
        alert: {
          category: sample(suricata_eve_alert_category),
          signature_id: sample(suricata_eve_alert_signature_id),
          gid: 1,
          rev: randomInRange(1, 3),
          signature: sample(suricata_eve_alert_signature),
        },
        tx_id: randomInRange(1, 3),
        flow_id: randomInRange(2000000000000000, 3000000000000000),
      },
    },
    event: {
      start: start_time.toISOString(),
      end: end_time.toISOString(),
      duration: end_time.valueOf() - start_time.valueOf(),
      severity: sample([1, 2, 3, 4, 5]),
      kind: 'event',
      outcome: 'allowed',
      module: 'suricata',
      dataset: 'suricata.eve',
    },
    destination: {
      bytes: randomInRange(10000, 100000),
      packets: randomInRange(10, 50),
      geo: {
        city_name: dest.name,
        country_iso_code: dest.country,
        location: { lat: parseFloat(dest.lat), lon: parseFloat(dest.lng) },
      },
      port: sample(destination_port),
      ip: [
        randomInRange(1, 254),
        randomInRange(1, 254),
        randomInRange(1, 254),
        randomInRange(1, 254),
      ].join('.'),
    },
    source: {
      bytes: randomInRange(10000, 100000),
      packets: randomInRange(10, 50),
      geo: {
        city_name: src.name,
        country_iso_code: src.country,
        location: { lat: parseFloat(src.lat), lon: parseFloat(src.lng) },
      },
      port: sample(source_port),
      ip: [
        randomInRange(1, 254),
        randomInRange(1, 254),
        randomInRange(1, 254),
        randomInRange(1, 254),
      ].join('.'),
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
      id: uuidv4(),
    },
    service: { type: 'suricata' },
    tags: ['suricata'],
    fileset: { name: sample(fileset_name) },
    agent: {
      type: 'filebeat',
      hostname: sample(host_hostname),
      ephemeral_id: uuidv4(),
      id: uuidv4(),
      version: '7.0.0',
    },
    ecs: { version: '1.0.0' },
    input: { type: 'log' },
    message: sample(log_message),
    request_path: {
      type: 'linestring',
      coordinates: [
        [parseFloat(src.lng), parseFloat(src.lat)],
        [parseFloat(dest.lng), parseFloat(dest.lat)],
      ],
    },
    cloud: {
      machine: { type: 'projects/238712873821/machineTypes/n1-standard-1' },
      instance: { name: 'suricata-ems', id: '2982319812023902193' },
      provider: 'gce',
      project: { id: 'elastic-beats' },
      availability_zone: 'projects/238712873821/zones/us-east1-b',
    },
    network: {
      bytes: randomInRange(10000, 100000),
      protocol: sample(network_protocol),
      packets: randomInRange(10, 50),
      transport: sample(network_protocol),
    },
  };
};
