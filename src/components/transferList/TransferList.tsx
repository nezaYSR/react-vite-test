import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { TagList } from "./TagList";
import "./TransferList.scss";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

type Tag = { id: number; type: string };

function not(a: Tag[], b: Tag[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: Tag[], b: Tag[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a: Tag[], b: Tag[]) {
  return [...a, ...not(b, a)];
}

export default function TransferList(props: any) {
  const [checked, setChecked] = useState<Tag[]>([]);
  const [left, setLeft] = useState<Tag[]>([
    TagList[0],
    TagList[1],
    TagList[2],
    TagList[3],
    TagList[4],
    TagList[5],
    TagList[6],
    TagList[7],
  ]);
  const [right, setRight] = useState<Tag[]>([
    TagList[8],
    TagList[9],
    TagList[10],
    TagList[11],
    TagList[12],
    TagList[13],
    TagList[14],
    TagList[15],
    TagList[16],
    TagList[17],
    TagList[18],
    TagList[19],
    TagList[20],
  ]);

  useEffect(() => {
    props.left(left);
  }, [left]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: Tag) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items: Tag[]) => intersection(checked, items).length;

  const handleToggleAll = (items: Tag[]) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title: React.ReactNode, items: Tag[]) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected",
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value: Tag) => {
          return (
            <ListItem
              key={value.id}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>

              <ListItemText primary={value.type} />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      className="sidebar-parent"
    >
      <Grid item>{customList("Include Tags:", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="contained"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
            color="primary"
          >
            <AiFillEyeInvisible />
            EXclude Tag
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="contained"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            color="primary"
            aria-label="move selected left"
          >
            <AiFillHeart />
            INclude Tag
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Exclude Tags:", right)}</Grid>
    </Grid>
  );
}
