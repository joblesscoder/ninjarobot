import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const request = require('request');
const ArenaRating = ({id, go}) => (
    <Panel id={id}>
        <Group>
            <Button size="xl" level="2" onClick={go} >
                Show me the home, please
            </Button>
            {request.get('http://google.com/')}
            hellonpm

        </Group>
    </Panel>
)

function httpGet(theUrl)
{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, true); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.responseText;
}



export default ArenaRating;