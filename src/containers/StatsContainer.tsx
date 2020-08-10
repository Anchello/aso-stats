import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { getStats, IData } from '../services/stats';
import StatsTable from '../components/StatsTable';
import Modal from '../components/Modal';
import { generateColumns, updateDataTable } from '../helpers';

const Loader = () => <div className="loader">Загрузка...</div>;

const StatsContainer:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IData[] | []>([]);
  useEffect(() => {
    getStats().then((dataRes: IData[]) => {
      setData(dataRes);
    });
  }, []);

  const handleClickShowPopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClickDelete = useCallback((index, id) => {
    setData(updateDataTable(data, index, id));
  }, [data]);

  const columns = useMemo(
    () => generateColumns(handleClickDelete, handleClickShowPopup),
    [handleClickDelete, handleClickShowPopup],
  );

  return (
    <>
      {!data.length ? <Loader /> : <StatsTable columns={columns} data={data} />}
      <Modal open={isOpen}>Show popup</Modal>
    </>
  );
};

export default StatsContainer;
