import React from 'react';
import { HeaderObjPath } from '../constants';

const HeaderComponent = () => {
    return (
        <div>
            {
                HeaderObjPath?.map((item: any, index: number) => {
                    return (
                        <span key={index}>{item?.title}</span>
                    )
                })
            }
        </div>
    )
}

export default HeaderComponent;