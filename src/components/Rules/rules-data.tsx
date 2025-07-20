import { FC } from 'react';
import {
  CommunityIcon,
  GriefingIcon,
  ServerRulesIcon,
  TradingIcon
} from './RuleIcons';

export interface Rule {
  id: number;
  title: string;
  icon: FC;
  content: string[];
}

export const RULES_DATA = [
  {
    id: 1,
    title: 'Community Guidelines',
    icon: CommunityIcon,
    content: [
      'Tôn trọng tất cả người chơi',
      'Không có ngôn từ kích động thù địch hoặc phân biệt đối xử',
      'Giữ cho cuộc trò chuyện thân thiện với gia đình',
      'Hỗ trợ người chơi mới khi có thể',
      'Sử dụng tên người dùng và giao diện phù hợp'
    ]
  },
  {
    id: 2,
    title: 'Building & Griefing',
    icon: GriefingIcon,
    content: [
      'Không phá hoại hoặc trộm cắp',
      'Tôn trọng công trình của người chơi khác',
      'Xây dựng cách xa người khác ít nhất 100 khối',
      'Dọn dẹp cây nổi và lỗ hổng do dây leo gây ra',
      'Xin phép trước khi xây dựng gần người khác'
    ]
  },
  {
    id: 3,
    title: 'Server Rules',
    icon: ServerRulesIcon,
    content: [
      'Không hack máy chủ hoặc gian lận',
      'Không khai thác lỗi hoặc trục trặc',
      'Không sử dụng máy hoặc farm AFK',
      'Làm theo hướng dẫn của nhân viên ngay lập tức',
      'Báo cáo vi phạm quy tắc cho người kiểm duyệt'
    ]
  },
  {
    id: 4,
    title: 'Trading & Economy',
    icon: TradingIcon,
    content: [
      'Chỉ áp dụng các biện pháp giao dịch công bằng',
      'Không lừa đảo người chơi khác',
      'Báo cáo các giao dịch không công bằng cho nhân viên',
      'Sử dụng khu vực mua sắm được chỉ định',
      'Tôn trọng tất cả các thỏa thuận thương mại'
    ]
  }
] satisfies Rule[];
