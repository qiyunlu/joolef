import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import RadioButton from './RadioButton';


//for dialog
const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

function FindFans() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = event => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked);
  };


  return (
    <React.Fragment>
      <button onClick={handleClickOpen}>Find fans</button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      ><div className="dialogheader">
          <a style={{ display: "flex", backgroundColor: "grey", color: "white", float: "left", width: "98%" }}>Find fans</a>
          <a onClick={handleClose} color="primary" style={{ display: "flex", backgroundColor: "grey", color: "white", float: "right", width: "2%" }}>
            x
                </a>
        </div>
        <DialogContent>
          <div className="typeheader" style={{ backgroundColor: "lightgrey" }}>
            <a>Type</a>
          </div>
          <div className="type_content" style={{ marginTop: "5px" }}>
          </div>
          <div>
            <a style={{ color: "black", marginRight: "20%" }}>Model year</a>
            <input type="number" id="tentacles" name="tentacles"
              min="2000" max="2200" />
            <a>--</a>
            <input type="number" id="tentacles" name="tentacles"
              min="2000" max="2200" />
          </div>
          <div className="TDheader" style={{ backgroundColor: "lightgrey", marginTop: "2%" }}>
            <a>Technical Details</a>
          </div>
          <div className="TD_content">
            <div style={{ marginTop: "2%" }}>
              <a style={{ color: "black", marginRight: "18%" }}>Airflow(CFM)</a>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
              <a>--</a>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
            </div>
            <div>
              <div style={{ marginTop: "2%" }}>
                <a style={{ color: "black", marginRight: "16%" }}>Max power(W)</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
                <a>--</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
              </div>
              <div style={{ marginTop: "2%" }}>
                <a style={{ color: "black", marginRight: "2%" }}>Sound at max speed(dBA)</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
                <a>--</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
              </div>
              <div style={{ marginTop: "2%" }}>
                <a style={{ color: "black", marginRight: "5.5%" }}>Fan sweep diameter(in)</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
                <a>--</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
              </div>
              <div style={{ marginTop: "2%" }}>
                <a style={{ color: "black", marginRight: "22.5%" }}>Height(in)</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
                <a>--</a>
                <input type="number" id="tentacles" name="tentacles"
                  min="2000" max="2200" />
              </div>
              <div className="brandheader" style={{ backgroundColor: "lightgrey", marginTop: "2%" }}>
                <a>Brand</a>
              </div>
              <div className="brandcontent">
                <a style={{ color: "black", marginRight: "5.5%" }}>Select Brand(s)</a>
                <select style={{ marginLeft: "11%" }}>
                  <option value="Emerson">Emerson</option>
                  <option value="Minka">Minka</option>
                  <option value="Westinghouse">Westinghouse</option>
                  <option value="Big Ass">Big Ass</option>
                </select>
              </div>
              <div className="wwheader" style={{ backgroundColor: "lightgrey", marginTop: "2%" }}>
                <a>Other</a>
              </div>
              <div className="wwcontent">
                <a style={{ color: "black", marginRight: "5.5%" }}>With the words</a>
                <select style={{ marginLeft: "11%" }}>
                  <option value="what">what</option>
                  <option value="is">is</option>
                  <option value="this">this</option>
                  <option value="function">function</option>
                </select>
                <button style={{ float: "right", backgroundColor: "blue" }}>search</button>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
                </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default FindFans;