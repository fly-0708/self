'use client'
import React, {useCallback, useState} from 'react';

import TreeShuttleBox from "@/app/components/treeShuttleBox/TreeShuttleBox";
import {Box} from "@mui/material";

const Page = () => {
    //穿梭框数据
    const [treeData, setTreeData] = useState<any[]>([{key: 0, title: '福建省'},
        {
            key: 1,
            title: '广东省',
            children: [
                {key: 10, title: '广州市'},
                {key: 11, title: '深圳市'},
                {key: 12, title: '佛山市'}
            ],
        },
        {
            key: 2,
            title: '广西省',
            children: [
                {key: 20, title: '梧州市'},
                {key: 21, title: '北海市'},
                {key: 22, title: '玉林市'}
            ],
        }]);

    const handleChange = useCallback((finallyValue: string[]) => {
        console.log("handleChange -> finallyValue", finallyValue);
    }, []);

    return (
        <Box>
            <TreeShuttleBox handleChange={handleChange}>
                <TreeShuttleBox.TreeShuttleBoxLeft treeData={treeData}/>
                <TreeShuttleBox.TreeShuttleButton/>
                <TreeShuttleBox.TreeShuttleBoxRight/>
            </TreeShuttleBox>
        </Box>
    );
};

export default Page;