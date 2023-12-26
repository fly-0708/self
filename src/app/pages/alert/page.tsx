'use client'
import React, {useEffect} from 'react';
import {Box} from '@mui/material'
import message from "@/app/components/alert/action";

const Select = () => {
    useEffect(() => {
        message.success('select组件加载成功', 2000)
    }, []);
    return (
        <Box>
            alert
        </Box>
    );
};

export default Select;