import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RoninAppStoreState, useStore } from 'app/store';
import { StackIconUrl } from 'assets';
import { AssetListPopup } from 'components';
import { TextFiledLabel } from 'components/base/Typography/TextFiledLabel';
import { CloseReason } from 'components/partials/AssetListPopup';
import React from 'react';
import Select from 'react-select';

interface SelectAssetsFieldProps {
    htmlFor?: string;
    textLabel?: string;
}
const customStyles = {
    control: () => ({
        display: 'flex',
        width: 336,
        height: 40,
        border: '1px solid #C5CEE0',
        borderRadius: 8,
        margin: '0 auto',
        justifyContent: 'space-between',
        marginBottom: 16,
    }),
    indicatorsContainer: () => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 38,
        height: 38,
        '&:hover': {
            borderRadius: '0 8px 8px 0',
            backgroundColor: '#ebedf0',
        },
    }),
    singleValue: ({ provided, state }: any) => {
        const opacity = state?.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    },
    valueContainer: () => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
    }),
};

const StyledLabelLogo = styled('img')(({ theme }) => ({
    width: 24,
    height: 24,
}));

const StyledIcon = styled('img')(({ theme }) => ({
    width: 20,
    height: 20,
}));

export const SelectAssetsField = ({ htmlFor, textLabel }: SelectAssetsFieldProps) => {
    const { currencies }: RoninAppStoreState | any = useStore();
    const [open, setOpen] = React.useState<boolean>(false);

    const handleClose = (value: CloseReason) => {
        setOpen(false);
    };

    const options = [
        {
            value: currencies[0]?.id,
            text: currencies[0]?.code,
            icon: <StyledLabelLogo src={currencies[0]?.logo} />,
        },
        {
            value: currencies[1]?.id,
            text: currencies[1]?.code,
            icon: <StyledLabelLogo src={currencies[1]?.logo} />,
        },
        {
            value: currencies[2]?.id,
            text: currencies[2]?.code,
            icon: <StyledLabelLogo src={currencies[2]?.logo} />,
        },
    ];
    const formatOptionLabel = ({ value, label, text }: string | any) => (
        <AssetListPopup open={open} onClose={handleClose} />
    );

    return (
        <Box onClick={() => setOpen(!open)}>
            <TextFiledLabel htmlFor={htmlFor}>{textLabel}</TextFiledLabel>
            <Select
                isClearable={false}
                theme={(theme) => ({ ...theme, borderRadius: 0 })}
                styles={customStyles}
                placeholder={''}
                defaultValue={options[0]}
                components={{
                    DropdownIndicator: () => {
                        return <StyledIcon src={StackIconUrl} />;
                    },
                    IndicatorSeparator: () => null,
                }}
                options={options}
                formatOptionLabel={formatOptionLabel}
                //@ts-ignore
                getOptionLabel={(e: any) => (
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        {e.icon}
                        <Typography style={{ marginLeft: 5, fontWeight: 400 }}>{e.text}</Typography>
                    </Box>
                )}
                openMenuOnClick={false}
                isSearchable={false}
            />
            {/* <AssetListPopup open={open} onClose={handleClose} /> */}
        </Box>
    );
};
