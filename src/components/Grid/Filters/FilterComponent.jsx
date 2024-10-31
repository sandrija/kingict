import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const getValue = (filter, option) => filter.formatValueOption && typeof filter.formatValueOption === 'function' ?
    filter.formatValueOption(option) :
    option.value;


const getLabel = (filter, option) => filter.formatTextOption && typeof filter.formatTextOption === 'function' ?
    filter.formatTextOption(option) :
    option.label;

const getComponent = (filter, value, onApplyFilter) => {
    const componentType = filter.componentType;
    switch (componentType) {
        case 'dropdown':
            return (
                <FormControl required sx={{ margin: '15px 0', minWidth: '260px' }}>
                    <InputLabel>{filter.label}</InputLabel>
                    <Select
                        value={value || ''}
                        label={filter.label}
                        onChange={(e) => onApplyFilter(filter.id, e.target.value)}
                    >
                        <MenuItem value="">
                            <em>Po ničemu</em>
                        </MenuItem>
                        {
                            filter.dropDownOptions.map((option, index) => (
                                <MenuItem
                                    key={index}
                                    value={getValue(filter, option)}
                                >
                                    {getLabel(filter, option)}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            );
        default: break;
    }
};


const FilterComponent = ({
    filterList,
    onApplyFilter,
    filtersState,
}) => {
    const filterComponents = useMemo(() => {
        return filterList.map(filter => (
            <Box key={filter.id}>
                {getComponent(filter, filtersState[filter.id], onApplyFilter)}
            </Box>
        ));
    }, [filtersState]);

    return (
        <Box>
            {
                filterComponents
            }
        </Box>
    )
}
export default FilterComponent;
