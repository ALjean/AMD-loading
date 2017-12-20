import * as React from "react";

interface MessageProps {
    msg: string;
}

interface MessageStates {
    sdkDataV1: string
    sdkDataV2: string
}

class Message extends React.Component<MessageProps, MessageStates> {

    constructor(props: MessageProps){
        super(props);
        this.state = { sdkDataV1: '', sdkDataV2: ''};
    }

    render() {
        return <div>{this.props.msg}, {this.state.sdkDataV1}, {this.state.sdkDataV2}</div>;
    }

    componentDidMount() {
        (window as any).scSDK.load('v1', (sdk:any) => {
            console.log(sdk.data);
            this.setState({sdkDataV1: sdk.data});
        });

        (window as any).scSDK.load('v2', (sdk:any) => {
            console.log(sdk.data);
            this.setState({sdkDataV2: sdk.data});
        });
    }
}

export default Message;