import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="96vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(184,45,205,1) 0%, rgba(58,191,176,1) 46%, rgba(44,58,208,1) 100%)",
            zIndex: 10,
            height: "200px",
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-103px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "50px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
