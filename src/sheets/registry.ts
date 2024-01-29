import {registerSheet} from 'react-native-actions-sheet';
import {SheetsId} from '../config/sheetsId';
import ActivitySheet from './ActivitySheet';
import NFTSheet from './NFTSheet';

registerSheet(SheetsId.ACTIVITY_SHEET, ActivitySheet);
registerSheet(SheetsId.NFT_SHEET, NFTSheet);
