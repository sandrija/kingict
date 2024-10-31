import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SortComponent = ({
    sortOptions,
    sortValue,
    toggleSort,
}) => {
    const handleChange = (value) => {
        toggleSort(value ? JSON.parse(value) : '');
    };

    return (
        <FormControl required sx={{ margin: '15px 0', minWidth: '260px' }}>
            <InputLabel>Sortiraj po</InputLabel>
            <Select
                value={sortValue ? JSON.stringify(sortValue) : ''}
                label="Sortiraj po"
                onChange={(e) => handleChange(e.target.value)}
            >
                <MenuItem value="">
                    <em>Po ničemu</em>
                </MenuItem>
                {
                    sortOptions.map((option, index) => (
                        <MenuItem
                            key={index}
                            value={JSON.stringify({
                                field: option.field,
                                sortDirection: option.sortDirection,
                                ...(option.numeric && { numeric: option.numeric })
                            })}
                        >
                            {option.label}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default SortComponent;
