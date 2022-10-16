import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

interface Props {
    className?: string;
    title?: string;
    onClick?: (event: MouseEvent) => void;
}

const ButtonComponent = ({className, title, onClick}: Props) => {
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText('#00C7F4'),
        backgroundColor: '#00C7F4',
        fontFamily: 'Urbanist',
        fontWeight: 700,
        borderRadius: '12px',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#00C7F4',
        },
    }));

    const handleOnClick = (event: MouseEvent) => {
        if (onClick) {
            onClick(event)
        }
    }

    return <ColorButton className={className} onClick={(e: any) => handleOnClick(e)}>{title}</ColorButton>
}

export default ButtonComponent;