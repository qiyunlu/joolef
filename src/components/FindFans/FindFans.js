import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

//for dialog
function FindFans() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // for radio button
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };


  return (
    <React.Fragment>
      <button onClick={handleClickOpen}>Find fans</button>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <div className="dialogheader">
          <div style={{ display: "flex", backgroundColor: "grey", color: "white", float: "left", width: "100%" }}>Find fans</div>
        </div>

        <DialogContent>
          <div className="typeheader" style={{ backgroundColor: "lightgrey" }}>
            <span>Type</span>
          </div>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ color: "black", marginRight: "20%", marginTop: "1.5%" }}>Use Type</div>
            <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            /><span style={{ marginTop: "1.5%" }}>Commercial</span>
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
            /><span style={{ marginTop: "1.5%" }}>Industrial</span>
            <Radio
              checked={selectedValue === 'c'}
              onChange={handleChange}
              value="c"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'C' }}
            /><span style={{ marginTop: "1.5%" }}>Residential</span>
          </div>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ color: "black", marginRight: "20%" }}>Model year</div>
            <input type="number" id="tentacles" name="tentacles"
              min="2000" max="2200" />
            <span>--</span>
            <input type="number" id="tentacles" name="tentacles"
              min="2000" max="2200" />
          </div>

          <div className="TDheader" style={{ backgroundColor: "lightgrey", marginTop: "2%" }}>
            <span>Technical Details</span>
          </div>
          <div className="TD_content">
            <div style={{ marginTop: "2%" }}>
              <span style={{ color: "black", marginRight: "18%" }}>Airflow(CFM)</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
              <span>--</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
            </div>
            <div style={{ marginTop: "2%" }}>
              <span style={{ color: "black", marginRight: "16%" }}>Max power(W)</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
              <span>--</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
            </div>
            <div style={{ marginTop: "2%" }}>
              <span style={{ color: "black", marginRight: "2%" }}>Sound at max speed(dBA)</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
              <span>--</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
            </div>
            <div style={{ marginTop: "2%" }}>
              <span style={{ color: "black", marginRight: "5.5%" }}>Fan sweep diameter(in)</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
              <span>--</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
            </div>
            <div style={{ marginTop: "2%" }}>
              <span style={{ color: "black", marginRight: "22.5%" }}>Height(in)</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
              <span>--</span>
              <input type="number" id="tentacles" name="tentacles"
                min="2000" max="2200" />
            </div>
          </div>

          <div className="brandheader" style={{ backgroundColor: "lightgrey", marginTop: "2%" }}>
            <span>Brand</span>
          </div>
          <div className="brandcontent">
            <span style={{ color: "black", marginRight: "5.5%" }}>Select Brand(s)</span>
            <select style={{ marginLeft: "11%" }}>
              <option value="Emerson">Emerson</option>
              <option value="Minka">Minka</option>
              <option value="Westinghouse">Westinghouse</option>
              <option value="Big Ass">Big Ass</option>
            </select>
          </div>

          <div className="wwheader" style={{ backgroundColor: "lightgrey", marginTop: "2%" }}>
            <span>Other</span>
          </div>
          <div className="wwcontent">
            <span style={{ color: "black", marginRight: "5.5%" }}>With the words</span>
            <select style={{ marginLeft: "11%" }}>
              <option value="what">what</option>
              <option value="is">is</option>
              <option value="this">this</option>
              <option value="function">function</option>
            </select>
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