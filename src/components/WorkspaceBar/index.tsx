import * as React from 'react';

type Props = {
    onSwitchTab: (newTab: string) => void;
};

class WorkspaceBar extends React.Component<Props, never> {
    switchTabTo(newTab: string) {
        this.props.onSwitchTab(newTab);
    }

    render() {
        return (
            <div id={'WorkspaceBar'}>
                <button onClick={()=>{this.switchTabTo('startTab')}}>Home</button>
                &nbsp;
                <button onClick={()=>{this.switchTabTo('uploadTab')}}>Upload</button>
                &nbsp;
                <button onClick={()=>{this.switchTabTo('imageListTab')}}>Images</button>
                {/*&nbsp;*/}
                {/*<button onClick={()=>{this.switchTabTo('verbListTab')}}>{t('workspace_bar.list_of_verbs')}</button>*/}
                {/*&nbsp;*/}
                {/*<button onClick={()=>{this.switchTabTo('myVocabTab')}}>{t('workspace_bar.your_vocab')}</button>*/}
                {/*&nbsp;*/}
                {/*<button onClick={()=>{this.switchTabTo('resultsTab')}}>{t('workspace_bar.your_results')}</button>*/}
                {/*&nbsp;*/}
                {/*<button onClick={()=>{this.switchTabTo('yourDataTab')}}>{t('workspace_bar.your_data')}</button>*/}
                {/*&nbsp;*/}
                {/*<button onClick={()=>{this.switchTabTo('settingsTab')}}>{t('workspace_bar.settings')}</button>*/}
            </div>
        )
    }
}

export default WorkspaceBar;