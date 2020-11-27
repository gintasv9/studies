import React from 'react';
import Select from 'react-select';
import { Box, Label, ThemeUICSSObject } from 'theme-ui';
import { filterOptions, Option, SortBy, sortByOptions, StudyStatus } from './model';

const styles: ThemeUICSSObject = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  width: '100%',
  padding: '16px 32px',
  backgroundColor: 'muted'
};

interface Props {
  filter: StudyStatus[];
  sortBy: SortBy;
  onChangeFilter: (filter: StudyStatus[]) => void;
  onChangeSortBy: (sortBy: SortBy) => void;
}

const StudiesToolbar: React.FC<Props> = ({
  filter,
  sortBy,
  onChangeFilter,
  onChangeSortBy
}) => {
  return (
    <Box sx={styles}>
      <div>
        <Label>Filter by statuses</Label>
        <Select
          value={filterOptions.filter(x => filter.includes(x.value))}
          options={filterOptions}
          hideSelectedOptions={false}
          closeMenuOnSelect={false}
          isMulti
          styles={{ container: styles => ({ ...styles, minWidth: 250 }) }}
          onChange={(option?: Option<StudyStatus>[]) => onChangeFilter(option?.map(x => x.value))}
        />
      </div>
      <div>
        <Label>Sort by</Label>
        <Select
          value={sortByOptions.find(x => x.value.order === sortBy.order && x.value.type === sortBy.type)}
          options={sortByOptions}
          styles={{ container: styles => ({ ...styles, minWidth: 200 }) }}
          onChange={(option: Option<SortBy>) => onChangeSortBy(option.value)}
        />
      </div>
    </Box>
  );
};

export default StudiesToolbar;