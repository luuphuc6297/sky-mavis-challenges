import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RoninAppStoreState, useStore } from 'app/store';
import { StackIconUrl } from 'assets';
import { AssetListPopup } from 'components';
import React, { MouseEventHandler } from 'react';
import Select from 'react-select';

interface GroupBase<Option> {
    readonly options: readonly Option[];
    readonly label?: string;
}

const customStyles = {
    control: () => ({
        display: 'flex',
        width: 336,
        height: 40,
        border: '1px solid #C5CEE0',
        borderRadius: 8,
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
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    },
};

const StyledWrapperLabel = styled(Box)(({ theme }) => ({
    width: 28,
}));
const StyledLabelLogo = styled('img')(({ theme }) => ({
    width: 24,
    height: 24,
}));

const StyledNameCurrency = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: 14,
}));

const StyledIcon = styled('img')(({ theme }) => ({
    width: 20,
    height: 20,
}));

export const SelectAssetsField = () => {
    const { currencies }: RoninAppStoreState | any = useStore();
    const [open, setOpen] = React.useState<boolean>(false);

    const options = [
        { value: currencies[0].id, label: currencies[0].code, customAbbreviation: currencies[0].logo },
        { value: currencies[1].id, label: currencies[1].code, customAbbreviation: currencies[1].logo },
        { value: currencies[2].id, label: currencies[2].code, customAbbreviation: currencies[2].logo },
    ];

    const formatOptionLabel = ({ value, label, customAbbreviation }: string | any) => (
        <StyledWrapperLabel style={{ display: 'flex' }}>
            <StyledLabelLogo src={customAbbreviation} />
            <StyledNameCurrency>{label}</StyledNameCurrency>
        </StyledWrapperLabel>
    );

    return (
        <Box onClick={() => setOpen(true)}>
            <Select
                isClearable={false}
                theme={(theme) => ({ ...theme, borderRadius: 0 })}
                styles={customStyles}
                placeholder={''}
                components={{
                    DropdownIndicator: () => {
                        return <StyledIcon src={StackIconUrl} />;
                    },
                    IndicatorSeparator: () => null,
                }}
                // formatOptionLabel={formatOptionLabel}
                openMenuOnClick={false}
                isSearchable={false}
            />
            <AssetListPopup open={open} onClose={() => setOpen(false)} />
        </Box>
    );
};
