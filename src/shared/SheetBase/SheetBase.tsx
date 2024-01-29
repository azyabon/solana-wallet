import React from 'react';
import ActionSheet, {SheetProps} from 'react-native-actions-sheet';

interface ISheetBaseProps extends SheetProps {
  sheetId: string;
  containerStyle?: any;
  indicatorStyle?: any;
  children: React.ReactNode;
}

export default function SheetBase(props: ISheetBaseProps) {
  return (
    <ActionSheet
      id={props.sheetId}
      statusBarTranslucent={false}
      drawUnderStatusBar={false}
      gestureEnabled
      indicatorStyle={props.indicatorStyle}
      containerStyle={props.containerStyle}
      springOffset={50}
      defaultOverlayOpacity={0.3}>
      {props.children}
    </ActionSheet>
  );
}
