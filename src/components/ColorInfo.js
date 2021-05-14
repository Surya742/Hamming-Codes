import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { WrapText } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    root1: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.default,
    },
    root2: {
        width: '100%',
        maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    root3: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    top: {
        marginLeft: "10%",
        display: "flex",
        flexWrap: "wrap"
    },
}));

export default function ColorInfo() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (

        <div className={classes.top}>
            <List className={classes.root}>
                

                <ListItem role={undefined} dense button>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': 5 }}
                            style={{color: "#fc033d"}}
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Error Bit`} />
                </ListItem>
            </List>


            <List className={classes.root2}>
                <ListItem role={undefined} dense button>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': 1 }}
                            style={{color: "#03adfc"}}
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Overall Parity Bit`} />
                </ListItem>
            </List>

            <List className={classes.root3}>
                <ListItem role={undefined} dense button>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked

                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': 1 }}
                            style={{color: "#03fca5"}}
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Parity Bit`} />
                </ListItem>
            </List>

            <List className={classes.root4}>
                <ListItem role={undefined} dense button>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': 1 }}
                            style={{color: "#cacccf"}}
                        />
                    </ListItemIcon>
                    <ListItemText primary={`Data Bit`} />
                </ListItem>
            </List>
        </div>
    );
}
