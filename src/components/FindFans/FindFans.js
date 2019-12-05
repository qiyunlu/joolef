import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Radio from '@material-ui/core/Radio';
import { useSelector, useDispatch } from 'react-redux';

import { setStore } from '../../redux/authActions';

//for dialog
const FindFans = (props) => {
  const store = useSelector(state => ({ ...state.searchParas }));
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // for radio button
  const handleUseTypeChange = event => {
    dispatch(setStore({
      searchParas: {
        ...store,
        useType: event.target.value
      }
    }));
  };
  const handleApplicationChange = event => {
    dispatch(setStore({
      searchParas: {
        ...store,
        application: event.target.value
      }
    }));
  };
  const handleMountingLocationChange = event => {
    dispatch(setStore({
      searchParas: {
        ...store,
        mountingLocation: event.target.value
      }
    }));
  };
  const handleAccessoriesChange = event => {
    dispatch(setStore({
      searchParas: {
        ...store,
        accessories: event.target.value
      }
    }));
  };

  console.log(props.state);
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
              checked={store.useType === 'Commercial'}
              onChange={handleUseTypeChange}
              value="Commercial"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Commercial' }}
            /><span style={{ marginTop: "1.5%" }}>Commercial</span>
            <Radio
              checked={store.useType === 'Industrial'}
              onChange={handleUseTypeChange}
              value="Industrial"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Industrial' }}
            /><span style={{ marginTop: "1.5%" }}>Industrial</span>
            <Radio
              checked={store.useType === 'Residential'}
              onChange={handleUseTypeChange}
              value="Residential"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Residential' }}
            /><span style={{ marginTop: "1.5%" }}>Residential</span>
          </div>

          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ color: "black", marginRight: "20%", marginTop: "1.5%" }}>Application</div>
            <Radio
              checked={store.application === 'Indoor'}
              onChange={handleApplicationChange}
              value="Indoor"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Indoor' }}
            /><span style={{ marginTop: "1.5%" }}>Indoor</span>
            <Radio
              checked={store.application === 'Outdoor'}
              onChange={handleApplicationChange}
              value="Outdoor"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Outdoor' }}
            /><span style={{ marginTop: "1.5%" }}>Outdoor</span>
          </div>

          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ color: "black", marginRight: "20%", marginTop: "1.5%" }}>Mounting Location</div>
            <Radio
              checked={store.mountingLocation === 'Roof'}
              onChange={handleMountingLocationChange}
              value="Roof"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Roof' }}
            /><span style={{ marginTop: "1.5%" }}>Roof</span>
            <Radio
              checked={store.mountingLocation === 'Wall'}
              onChange={handleMountingLocationChange}
              value="Wall"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Wall' }}
            /><span style={{ marginTop: "1.5%" }}>Wall</span>
            <Radio
              checked={store.mountingLocation === 'Free standing'}
              onChange={handleMountingLocationChange}
              value="Free standing"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Free standing' }}
            /><span style={{ marginTop: "1.5%" }}>Free standing</span>
          </div>

          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ color: "black", marginRight: "20%", marginTop: "1.5%" }}>Accessories</div>
            <Radio
              checked={store.accessories === 'With light'}
              onChange={handleAccessoriesChange}
              value="With light"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'With light' }}
            /><span style={{ marginTop: "1.5%" }}>With light</span>
            <Radio
              checked={store.accessories === 'Without light'}
              onChange={handleAccessoriesChange}
              value="Without light"
              color="default"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'Without light' }}
            /><span style={{ marginTop: "1.5%" }}>Without light</span>
          </div>

          <div style={{ display: 'flex', marginTop: '10px' }}>
            <div style={{ color: "black", marginRight: "20%" }}>Model year</div>
            <input type="number" id="tentacles" name="tentacles"
              min="1970" max="2019" value={store.modelYearMin}
              onChange={(event) => dispatch(setStore({searchParas: {...store,modelYearMin: event.target.value}}))}/>
            <span>--</span>
            <input type="number" id="tentacles" name="tentacles"
              min="1970" max="2019"  value={store.modelYearMax}
              onChange={(event) => dispatch(setStore({searchParas: {...store,modelYearMax: event.target.value}}))}/>
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