import { useState } from 'react';
import Group from './Group';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from '../tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    // console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
            <h2>Name:</h2> {stored.name}
            <span></span>
            <span></span>
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
            <span></span>
            <span></span>
        </Group>
        <Group>
            <h2>Favourite Color:</h2> <ColorBox color={stored.color}/>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Group>
        <Group>
            <span></span>
            <span></span>
            <button
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}



