import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Input,
} from '@material-tailwind/react';
import { addCard } from '../../redux/reducers/cardReducer';
import { useDispatch } from 'react-redux';

export function AddCardDialog() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    type: '',
    title: '',
    graph: '',
    colour: 'white',
    text: '',
    data: '',
  });
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(!open);

  const handleSave = () => {
    dispatch(
      addCard({
        bgColor: data.colour,
        data: data.text,
        title: data.title,
        graphType: data.graph,
        type: data.type,
      }),
    );
    handleOpen();
    setData({
      type: '',
      title: '',
      graph: '',
      colour: 'white',
      text: '',
      data: '',
    });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        className="text-sm  2xsm:p-2"
      >
        <i className="fa-solid fa-plus mr-2" />
        Add Widget
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Create a widget</DialogHeader>
        <DialogBody className="space-y-4" divider={true}>
          <Input label="Card Title" />
          <Select
            onChange={(value) =>
              setData((prev) => ({ ...prev, type: value ? value : '' }))
            }
            variant="outlined"
            label="Select Type of Card"
          >
            <Option value="table">Table Data</Option>
            <Option value="graph">Graph</Option>
            <Option value="summary">Summary</Option>
          </Select>
          {data.type == 'graph' ? (
            <Select
              onChange={(value) =>
                setData((prev) => ({ ...prev, graph: value ? value : '' }))
              }
              variant="outlined"
              label="Select Type of Graph"
            >
              <Option value="bar">Bar</Option>
              <Option value="line">Line</Option>
              <Option value="pie">Pie</Option>
            </Select>
          ) : data.type == 'summary' ? (
            <Input
              label="Enter Summary"
              onChange={(event) =>
                setData((prev) => ({
                  ...prev,
                  text: event.target.value ? event.target.value : '',
                }))
              }
            />
          ) : (
            ''
          )}
          <div className="flex w-full flex-row gap-2 items-center">
            <span> Colour:</span>
            <div
              onClick={() => setData((prev) => ({ ...prev, colour: 'white' }))}
              className={
                'w-4 h-4 rounded-full bg-white cursor-pointer border ' +
                (data.colour == 'white' ? 'w-6 h-6 box-content' : '')
              }
            />
            <div
              onClick={() => setData((prev) => ({ ...prev, colour: 'blue' }))}
              className={
                'w-4 h-4 rounded-full bg-light-blue-900 cursor-pointer ' +
                (data.colour == 'blue' ? 'w-6 h-6 box-content' : '')
              }
            />
            <div
              onClick={() => setData((prev) => ({ ...prev, colour: 'black' }))}
              className={
                'w-4 h-4 rounded-full bg-black cursor-pointer  ' +
                (data.colour == 'black' ? 'w-6 h-6 box-content' : '')
              }
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSave}>
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
