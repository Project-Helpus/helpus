import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostAPI } from "../../api/axios";

export const __createPost = createAsyncThunk(
  "mypageSlice/createPost",
  async (formData, thunkAPI) => {
    try {
      const response = await PostAPI.postCreate(formData);
      return thunkAPI.fulfillWithValue();
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

//    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  전국  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//    <  전국 false  >
export const __getAllFalse = createAsyncThunk(
  "mypageSlice/getAllFalse",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res = await PostAPI.getAllFalse(searchValue);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

//    <  헬피 false  >
export const __getHelpeeFalse = createAsyncThunk(
  "mypageSlice/__getHelpeeFalse",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res = await PostAPI.getHelpeeFalse(searchValue)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
//    <  헬퍼 false  >
export const __getHelperFalse = createAsyncThunk(
  "mypageSlice/__getHelperFalse",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res = await PostAPI.getHelperFalse(searchValue)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
//    <  헬퍼스 false  >
export const __getHelpUsFalse = createAsyncThunk(
  "mypageSlice/__getHelpUsFalse",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res =await PostAPI.getHelpUsFalse(searchValue)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);


//    <<<<<<><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  로컬  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

//    <  전체 게시물 true  >
export const __getAllTrue = createAsyncThunk(
  "mypageSlice/getAllTrue",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res = await PostAPI.getAllTrue(searchValue)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
//    <  헬피 true  >
export const __getHelpeeTrue = createAsyncThunk(
  "mypageSlice/__getHelpeeTrue",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res = await PostAPI.getAllTrue(searchValue)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
//    <  헬퍼 true  >
export const __getHelperTrue = createAsyncThunk(
  "mypageSlice/__getHelperTrue",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res = await PostAPI.getHelperTrue(searchValue)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);
//    <  헬퍼스 true  >
export const __getHelpUsTrue = createAsyncThunk(
  "mypageSlice/__getHelpUsTrue",
  async (payload, thunkAPI) => {
    try {
      const searchValue = thunkAPI.getState().postSlice.inputReciver;
      const res = await PostAPI.getHelpUsTrue(searchValue)
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = {
  isLoading: false,
  error: false,
  boolHelper: false,
  boolHelpee: false,
  boolAll: false,
  boolLocation: false,
  AllFalseDate: [],
  helpeeFalseDate: [],
  helperFalseDate: [],
  helpUsFalseDate: [],
  AllTrueDate: [],
  helpeeTrueDate: [],
  helperTrueDate: [],
  helpUsTrueDate: [],
  inputReciver: "",
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    __setBoolHelper: (state) => {
      state.boolHelper = true;
      state.boolHelpee = false;
      state.boolAll = false;
    },
    __setBoolHelpee: (state) => {
      state.boolHelpee = true;
      state.boolHelper = false;
      state.boolAll = false;
    },
    __setBoolLocationTrue: (state) => {
      state.boolLocation = true;
    },
    __setBoolLocationFalse: (state) => {
      state.boolLocation = false;
    },
    __giveInput: (state, action) => {
      state.inputReciver = action.payload;
    },
  },
  extraReducers: {
    [__createPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__createPost.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },

    //    <<<<<<<<<<<<<<<<<<  전체 false 가져오기  >>>>>>>>>>>>>>>>>>>>>
    [__getAllFalse.pending]: (state) => {},
    [__getAllFalse.fulfilled]: (state, action) => {
      state.AllFalseDate = action.payload;
    },
    [__getAllFalse.rejected]: (state, action) => {
      console.log("전체 false 가져오기 Error");
    },

    //    <  헬피 false 가져오기  >
    [__getHelpeeFalse.pending]: (state) => {},
    [__getHelpeeFalse.fulfilled]: (state, action) => {
      state.helpeeFalseDate = action.payload;
    },
    [__getHelpeeFalse.rejected]: (state, action) => {
      console.log("헬피 false 가져오기 Error");
    },
    //    <  헬퍼 false 가져오기  >
    [__getHelperFalse.pending]: (state) => {},
    [__getHelperFalse.fulfilled]: (state, action) => {
      state.helperFalseDate = action.payload;
    },
    [__getHelperFalse.rejected]: (state, action) => {
      console.log("헬퍼 false 가져오기 Error");
    },
    //    <  헬퍼스 false 가져오기  >
    [__getHelpUsFalse.pending]: (state) => {},
    [__getHelpUsFalse.fulfilled]: (state, action) => {
      state.helpUsFalseDate = action.payload;
    },
    [__getHelpUsFalse.rejected]: (state, action) => {
      console.log("헬퍼스 false 가져오기 Error");
    },

    //    <<<<<<<<<<<<<<<<<<  전체 true 가져오기  >>>>>>>>>>>>>>>>>>>>>
    [__getAllTrue.pending]: (state) => {},
    [__getAllTrue.fulfilled]: (state, action) => {
      state.AllTrueDate = action.payload;
    },
    [__getAllTrue.rejected]: (state, action) => {
      console.log("전체 true 가져오기 Error");
    },
    //    <  헬피 true 가져오기  >
    [__getHelpeeTrue.pending]: (state) => {},
    [__getHelpeeTrue.fulfilled]: (state, action) => {
      state.helpeeTrueDate = action.payload;
    },
    [__getHelpeeTrue.rejected]: (state, action) => {
      console.log("헬피 true 가져오기 Error");
    },
    //    <  헬퍼 true 가져오기  >
    [__getHelperTrue.pending]: (state) => {},
    [__getHelperTrue.fulfilled]: (state, action) => {
      state.helperTrueDate = action.payload;
    },
    [__getHelperTrue.rejected]: (state, action) => {
      console.log("헬퍼 true 가져오기 Error");
    },
    //    <  헬퍼스 true 가져오기  >
    [__getHelpUsTrue.pending]: (state) => {},
    [__getHelpUsTrue.fulfilled]: (state, action) => {
      state.helpUsTrueDate = action.payload;
    },
    [__getHelpUsTrue.rejected]: (state, action) => {
      console.log("헬퍼 true 가져오기 Error");
    },
  },
});
export const {
  __setBoolHelper,
  __setBoolHelpee,
  __setBoolLocationTrue,
  __setBoolLocationFalse,
  __giveInput,
} = postSlice.actions;
export default postSlice.reducer;
