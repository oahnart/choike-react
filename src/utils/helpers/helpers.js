import { message } from "antd";

const has = Object.prototype.hasOwnProperty;

export const isDiff = (A, B) => JSON.stringify(A) !== JSON.stringify(B);

export const isEmpty = (prop) => {
  return (
    prop === null ||
    prop === undefined ||
    (has.call(prop, "length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
};

export const showErrorToast = (textMessage) => {
  message.error(textMessage);
};

export const showErrorMessage = (codeError) => {
  switch (codeError) {
    case 403008:
      showErrorToast("Tài khoản đăng nhập hoặc mật khẩu không chính xác !");
      break;
    case 400006:
      showErrorToast("Tài khoản đăng nhập không hợp lệ !");
      break;
    case 400007:
      showErrorToast("Mật khẩu đăng nhập không hợp lệ !");
      break;
    case 403009:
      showErrorToast("Mật khẩu đăng nhập cũ không hợp lệ !");
      break;
    case 400004:
      showErrorToast("Tài khoản đăng nhập này đã tồn tại !");
      break;
    case 400003:
      showErrorToast("Địa chỉ email này đã tồn tại !");
      break;
    case 403102:
      showErrorToast("Không thể lấy được thông tin tài khoản facebook !");
      break;
    case 403010:
      showErrorToast("Tài khoản dăng nhập hoặc địa chỉ email không tồn tại !");
      break;
    case 400904:
    case 400903:
      showErrorToast("Bạn đã sủ dụng hết số mã xác thực trong ngày !");
      break;
    case 400900:
      showErrorToast("Mã xác thực không tồn tại !");
      break;
    case 400902:
      showErrorToast("Mã xác thực đã hết hạn !");
      break;
    case 400901:
      showErrorToast("Mã xác thực không chính xác !");
      break;
    case 403005:
      showErrorToast("Địa chỉ email không tồn tại !");
      break;
    case 400201:
      showErrorToast("Bạn chỉ được lưu trữ tối đã 20 địa chỉ !");
      break;
    case 400202:
      showErrorToast("Xã/Phường không tồn tại !");
      break;
    case 400300:
      showErrorToast("Tin đăng giao chiến không còn tồn tại !");
      break;
    case 400402:
      showErrorToast("Tin đăng giao dịch không còn tồn tại !");
      break;
    case 400203:
      showErrorToast("Địa chỉ của bạn không còn tồn tại !");
      break;
    case 400401:
      showErrorToast("Bạn không có quyền với tin đăng này !");
      break;
    case 400400:
    case 400601:
    case 400303:
      showErrorToast("Tin đăng này đã được đóng bởi người tạo !");
      break;
    case 400500:
      showErrorToast("Bạn đã gửi yêu cầu giao dịch trước đó !");
      break;
    case 400501:
      showErrorToast("Không thể gửi yêu cầu giao dịch cho chính bạn !");
      break;
    case 400503:
      showErrorToast("Yêu cầu giao dịch không còn tồn tại !");
      break;
    case 400504:
    case 400603:
      showErrorToast("Trạng thái gần đây đã được cập nhật !");
      break;
    case 400505:
    case 400604:
      showErrorToast("Trạng thái không hợp lệ !");
      break;
    case 400304:
      showErrorToast("Ngày mong muốn không hợp lệ !");
      break;
    case 400301:
      showErrorToast("Bạn không có quyền sửa tin này !");
      break;
    case 400601:
      showErrorToast("Không thể gửi yêu cầu giao chiến cho chính bạn !");
      break;
    case 400302:
      showErrorToast("Ngày yêu cầu không tồn tại !");
      break;
    case 400602:
      showErrorToast("Không tìm thấy ngày yêu cầu !");
      break;
    case 400305:
    case 400403:
      showErrorToast(
        "Rất tiếc bạn chỉ được đăng tối đa 20 tin, để đăng nhiều hơn vui lòng nâng cấp tài khoản !"
      );
      break;
    case 400700:
      showErrorToast(
        "Rất tiếc bạn chỉ được phép tải lên ảnh có định dạng jpg, png !"
      );
      break;
    case 400701:
      showErrorToast(
        "Rất tiếc dung lượng lưu trữ không còn nữa, vui lòng thử lại sau !"
      );
      break;
    case 400702:
      showErrorToast("File không còn tồn tại !");
      break;
    default:
      showErrorToast("Đã có lỗi xảy ra, vui lòng thử lại sau !");
  }
};
