import * as React from 'react';
import styles from './BlinkingTextWebPart.module.scss';
import { IBlinkingTextWebPartProps } from './IBlinkingTextWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class BlinkingTextWebPart extends React.Component<IBlinkingTextWebPartProps, {}> {
  public render(): React.ReactElement<IBlinkingTextWebPartProps> {
    return (
      <div className={ styles.blinkingTextWebPart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p className={ styles.blinking }>{escape(this.props.description)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
