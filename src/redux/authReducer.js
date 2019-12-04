const initialState = {

  authenticated: true,
  JWT: null,

  productLines: [],
  chosen: 0,
  chosenName: '',

  productLineFk: '',
  products: [],
  searchParas: {
    useType: '',
    application: '',
    mountingLocation: '',
    accessories: '',
    modelYearMin: '',
    modelYearMax: '',
    airflowMin: '',
    airflowMax: '',
    maxPowerMin: '',
    maxPowerMax: '',
    maxSoundMin: '',
    maxSoundMax: '',
    sweepDiameterMin: '',
    sweepDiameterMax: '',
    heightMin: '',
    heightMax: '',
    firmMin: '',
    firmMax: '',
    globalMin: '',
    globalMax: '',
    brand: ''
  },

  product: {}

};

const authReducer = (state = initialState, action) => {
  let _state = { ...state };
  switch (action.type) {
    case 'Login':
      return {
        ..._state,
        authenticated: true,
        JWT: action.JWT
      };
    case 'Logout':
      return {
        ..._state,
        authenticated: false,
        JWT: null
      };
    case 'SetStore':
      return {
        ..._state,
        ...action.payload
      };
    default: { }
  }
  return _state;
}

export default authReducer;
