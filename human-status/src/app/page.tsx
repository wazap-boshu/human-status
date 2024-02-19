import { Box, Button, Typography } from "../../node_modules/@mui/material/index";
import { useRouter } from "../../node_modules/next/navigation";

export default function Home() {
  return (
    <>
      <Box>
        <h1>
          ここにヘッダーを入れます
        </h1>
        <Typography>
          ここに説明。ここに説明。ここに説明。ここに説明。ここに説明。ここに説明。ここに説明。ここに説明。
          </Typography>
        <Button
          // TODO: クリック時 最初の質問へ
        >
          開始する
        </Button> 
      </Box>
    </>
  );
}
