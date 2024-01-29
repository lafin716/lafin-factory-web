export const successMsg = (message: string) => {
  ElMessage({
    type: "success",
    message: message,
  });
};

export const errorMsg = (message: string) => {
  ElMessage({
    type: "error",
    message: message,
  });
};

export const warningMsg = (message: string) => {
  ElMessage({
    type: "warning",
    message: message,
  });
};

export const infoMsg = (message: string) => {
  ElMessage({
    type: "info",
    message: message,
  });
};
