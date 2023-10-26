import { KafkaConfig } from './KafkaConfig';
import { HttpConfig } from './HttpConfig';
import { SearchIngestion } from './SearchIngestion';
import { SendEvent } from './SendEvent';
import { DiscoverEvent } from './DiscoverEvent';
import { EventHubConfig } from './EventHubConfig';
import { AzureBlobConfig } from './AzureBlobConfig';

export interface DeliveryTargets {
    Kafka?: KafkaConfig
    Http?: HttpConfig
    SearchIngestion?: SearchIngestion
    SendEvent?: SendEvent
    DiscoverEvent?: DiscoverEvent
    EventHub?: EventHubConfig
    AzureBlob?: AzureBlobConfig
}