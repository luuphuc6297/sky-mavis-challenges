import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { AssetCard } from 'components';
import * as React from 'react';

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

export interface AssetListPopupProps {
    open: boolean;
    onClose?: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        width: 336,
        height: 560,
        borderRadius: 16,
    },
    '& .MuiDialogContent-root': {
        padding: 0,
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    textAlign: 'center',
    fontWeight: 600,
    lineHeight: '20px',
    fontSize: 14,
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <StyledDialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#57627B',
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </StyledDialogTitle>
    );
};

export const AssetListPopup = ({ open, onClose }: AssetListPopupProps) => {
    console.log('open', open);
    console.log('onClose', onClose);
    return (
        <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
            <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
                Assets
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <AssetCard />
            </DialogContent>
        </BootstrapDialog>
    );
};
