import { useRequest } from '@umijs/hooks';
import { useState } from 'react';
import { getStudies } from '../../api/studies';
import { SortBy, StudiesResponse, Study, StudyStatus } from './model';

const initialFilter: StudyStatus[] = ['finished'];
const initialSortBy: SortBy = { type: 'updatedAt', order: 'desc' };

const studyFilterPredicate = (filter: StudyStatus[]) => (study: Study) => {
  return !filter.length || filter.includes(study.statusKey);
};

const studySorter = (sortBy: SortBy) => (a: Study, b: Study) => {
  let result: number;
  switch (sortBy.type) {
    case 'name':
      result = a.name.localeCompare(b.name);
      break;
    case 'updatedAt':
      result = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      break;
  }

  return sortBy.order === 'asc' ? result : result * -1;
};

const filterBuggedStudies = (res: StudiesResponse) => {
  return res.data.filter(x => !x.name.includes('buggy'));
};

export const useStudies = () => {
  const { data, loading, error } = useRequest(getStudies, { formatResult: filterBuggedStudies });
  const [filter, setFilter] = useState<StudyStatus[]>(initialFilter);
  const [sortBy, setSortBy] = useState<SortBy>(initialSortBy);

  const filteredAndSortedStudies = () =>
    (data || [])
      .filter(studyFilterPredicate(filter))
      .sort(studySorter(sortBy));

  const changeFilter = (filter: StudyStatus[]) => {
    setFilter(filter);
  };

  const changeSortBy = (sortBy: SortBy) => {
    setSortBy(sortBy);
  };

  return {
    studies: filteredAndSortedStudies(),
    loading,
    error,
    filter,
    sortBy,
    changeFilter,
    changeSortBy
  };
};