import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <Accordion>
      <Accordion.Item index={0}>
        <Accordion.Header>Facebook</Accordion.Header>
        <Accordion.Panel>
          Facebook là mạng xã hội lớn nhất thế giới, cho phép người dùng kết nối với bạn bè, gia đình và những người có cùng sở thích. 
          Người dùng có thể chia sẻ trạng thái, ảnh, video, tham gia các nhóm (Groups) và trang (Pages), 
          cũng như sử dụng tính năng nhắn tin qua Messenger để giao tiếp trực tiếp.
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={1}>
        <Accordion.Header>Instagram</Accordion.Header>
        <Accordion.Panel>
          Instagram là một nền tảng mạng xã hội tập trung chủ yếu vào việc chia sẻ hình ảnh và video. 
          Nổi bật với các tính năng như Stories (biến mất sau 24 giờ), Reels (video ngắn tương tự TikTok) và bộ lọc ảnh đa dạng, 
          Instagram đặc biệt thu hút giới trẻ và các nhãn hàng muốn xây dựng hình ảnh thương hiệu trực quan.
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={2}>
        <Accordion.Header>X (trước đây là Twitter)</Accordion.Header>
        <Accordion.Panel>
          X là mạng xã hội microblogging nơi người dùng tương tác thông qua các bài đăng ngắn. 
          Nền tảng này rất mạnh trong việc cập nhật tin tức theo thời gian thực, thảo luận về các sự kiện đang diễn ra (trending topics), 
          và là nơi các chính trị gia, nhà báo, người nổi tiếng thường xuyên sử dụng để phát ngôn trực tiếp.
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={3}>
        <Accordion.Header>LinkedIn</Accordion.Header>
        <Accordion.Panel>
          LinkedIn là mạng xã hội định hướng kinh doanh và tuyển dụng lớn nhất hiện nay. 
          Thay vì chia sẻ cuộc sống cá nhân, người dùng tạo hồ sơ chuyên nghiệp (CV online), kết nối với đồng nghiệp, 
          tìm kiếm cơ hội việc làm, và chia sẻ kiến thức, kinh nghiệm liên quan đến ngành nghề của họ.
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item index={4}>
        <Accordion.Header>TikTok</Accordion.Header>
        <Accordion.Panel>
          TikTok là nền tảng video ngắn bùng nổ mạnh mẽ trong những năm gần đây. 
          Với thuật toán đề xuất nội dung (For You Page) cực kỳ thông minh và dễ gây nghiện, TikTok cho phép người dùng 
          tạo và xem các video giải trí, nhảy múa, giáo dục... có thời lượng từ vài giây đến vài phút với nhiều hiệu ứng bắt mắt.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export default App;
