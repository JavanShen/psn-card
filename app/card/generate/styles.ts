export function generateStyle() {
  return /* html */ `
    <style>
      .card {
        color: white;
        background: linear-gradient(45deg, #016AD3, #003C9E);
        font-size: 14px;
        height: 150px;
        width: 400px;
        padding: 10px;
        gap: 10px;
        display: flex;
        flex-direction: column;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        border-radius: 5px;
        justify-content: space-between;
        box-sizing: border-box;
      }

      .top {
        display: flex;
        justify-content: space-between;
      }

      .avatar {
        border-radius: 5px;
      }

      .user-info {
        display: flex;
        gap:10px;
      }

      .status {
        display:flex;
        flex-direction: column;
        justify-content: start;
        font-size: 12px;
        font-weight: bold;
      }

      .counts {
        font-size: 12px;
        display: flex;
        gap: 20px;
      }

      .count-item {
        display:flex;
        flex-direction: column;
        align-items: center;
      }

      .game-list {
        display:flex;
        gap:8px;
      }

      .icon-list {
        position: absolute;
        right: 7px;
        top: 50px;
        display: flex;
        gap: 10px;
      }
    </style>
  `;
}
