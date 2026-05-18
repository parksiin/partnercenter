import React, { useState } from 'react';
import Button from './components/Button';
import ButtonTxt from './components/ButtonTxt';
import InputMessage from './components/InputMessage';
import InputRow from './components/InputRow';
import InputExcel from './components/InputExcel';
import Select from './components/Select';
import SelectExcel from './components/SelectExcel';
import Tab from './components/Tab';
import TabAtomic from './components/TabAtomic';
import BadgeIcon from './components/BadgeIcon';
import BadgeStatus from './components/BadgeStatus';
import BadgeCount from './components/BadgeCount';
import Checkbox from './components/Checkbox';
import AccordionTrigger from './components/AccordionTrigger';
import Modal from './components/Modal';
import Count from './components/Count';
import Alert from './components/Alert';
import Toast from './components/Toast';
import Pagination from './components/Pagination';
import LnbAtomic from './components/LnbAtomic';
import Lnb from './components/Lnb';
import Header from './components/Header';
import Footer from './components/Footer';






const dummyTabsInfo = [
  { id: 'tab1', label: '유지', showBadge: false },
  { id: 'tab2', label: '승인대기', showBadge: true },
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [excelValue, setExcelValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectMediumValue, setSelectMediumValue] = useState('');
  const [selectSmallValue, setSelectSmallValue] = useState('');
  const [selectExcelValue, setSelectExcelValue] = useState('');
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(true);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('1column');

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const [toast, setToast] = useState({ visible: false, message: '', showAction: false });
  const [lnbActiveType, setLnbActiveType] = useState("01");

  const showToast = (message, showAction = false) => {
    setToast({ visible: true, message, showAction });
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, visible: false }));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  return (
    <div className="min-h-[100vh] flex flex-col bg-background-gray">
      {/* 피그마 연동 Header 컴포넌트 */}
      <Header 
        username="김다솜" 
        sessionTime="00:59:57" 
        onLogout={() => alert('로그아웃 되었습니다.')}
        onMyPage={() => alert('마이페이지로 이동합니다.')}
      />
      
      {/* 메인 데모 영역 */}
      <div className="p-10 font-sans flex flex-col items-center gap-10 flex-1">
        <div className="w-[100%] max-w-[896px] bg-surface-white p-8 rounded-large shadow-2 border border-border-gray-light">
        <h1 className="text-title-l font-bold text-text-bolder mb-8 border-b border-border-gray-light pb-4">
          🎨 피그마에서 꺼내온 컴포넌트 리뷰
        </h1>
        
        {/* Input Message Types */}
        <div className="mb-10 p-6 bg-surface-gray rounded-medium border border-border-gray-light">
          <h2 className="text-title-m font-bold text-text-basic mb-4">Input Message (피드백/안내 문구)</h2>
          <div className="flex flex-col gap-5 bg-surface-white p-6 rounded-small border border-border-gray-light">
            <InputMessage type="hint" hint="필요한 정보를 입력해 주세요" />
            <InputMessage type="info" alert="안내 메시지를 확인해 주세요" />
            <InputMessage type="error" alert="입력 정보에 오류가 발생했습니다" />
            <InputMessage type="success" alert="정상적으로 처리되었습니다" />
          </div>
        </div>

        {/* Input Row View */}
        <div className="mb-10 p-6 bg-surface-gray rounded-medium border border-border-gray-light">
          <h2 className="text-title-m font-bold text-text-basic mb-4">Input Row</h2>
          <div className="flex flex-col gap-6 bg-surface-white p-6 rounded-small border border-border-gray-light">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-label-s text-text-subtle font-bold border-b border-border-gray-light pb-2">기본 상태 & 이벤트 (Medium 사이즈)</h3>
                <InputRow 
                  label="이메일" 
                  size="medium"
                  placeholder="이메일을 입력해 주세요" 
                  hintText="로그인에 사용할 이메일을 넣어주세요"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  icon="search"
                />
                
                <h3 className="text-label-s text-text-subtle font-bold border-b border-border-gray-light pb-2 mt-4">비밀번호 입력 (Large 사이즈)</h3>
                <InputRow 
                  label="비밀번호" 
                  type="password"
                  size="large"
                  required
                  placeholder="비밀번호를 입력해 주세요" 
                  alertText="비밀번호는 8자 이상이어야 합니다"
                  state="error"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-label-s text-text-subtle font-bold border-b border-border-gray-light pb-2">기타 상태 (Disabled / View)</h3>
                <InputRow 
                  size="small"
                  label="비활성화된 필드 (Small 사이즈)" 
                  state="disabled"
                  placeholder="선택할 수 없습니다" 
                  hintText="이 필드는 비활성화되어 수정할 수 없습니다."
                />
                <InputRow 
                  label="읽기 전용 필드" 
                  state="view"
                  value="읽기 전용 텍스트입니다."
                  hintText="확인만 가능한 데이터입니다."
                  icon="search"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Button Type */}
        <div className="mb-10 p-6 bg-surface-gray rounded-medium border border-border-gray-light">
          <h2 className="text-title-m font-bold text-text-basic mb-4">Text Buttons (ButtonTxt)</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end gap-5 border-b border-border-gray-light pb-4">
              <h3 className="w-[100%] text-label-s text-text-subtle">Primary</h3>
              <ButtonTxt type="primary" size="large" label="Large" showLeftIcon />
              <ButtonTxt type="primary" size="medium" label="Medium" showRightIcon />
              <ButtonTxt type="primary" size="small" label="Small" />
              <ButtonTxt type="primary" size="medium" label="Disabled" disabled />
            </div>
            
            <div className="flex flex-wrap items-end gap-5 border-b border-border-gray-light pb-4">
              <h3 className="w-[100%] text-label-s text-text-subtle">Secondary</h3>
              <ButtonTxt type="secondary" size="large" label="Large" showLeftIcon />
              <ButtonTxt type="secondary" size="medium" label="Medium" showRightIcon />
              <ButtonTxt type="secondary" size="small" label="Small" />
              <ButtonTxt type="secondary" size="medium" label="Disabled" disabled />
            </div>

            <div className="flex flex-wrap items-end gap-5 p-4 bg-background-inverted rounded-medium">
              <h3 className="w-[100%] text-label-s text-text-disabled-inverted">Inverted (어두운 배경용)</h3>
              <ButtonTxt type="inverted" size="large" label="Large" showLeftIcon />
              <ButtonTxt type="inverted" size="medium" label="Medium" showRightIcon />
              <ButtonTxt type="inverted" size="small" label="Small" />
              <ButtonTxt type="inverted" size="medium" label="Disabled" disabled />
            </div>
          </div>
        </div>

        {/* Primary Type */}
        <div className="mb-10">
          <h2 className="text-title-m font-bold text-text-basic mb-4">Primary Buttons</h2>
          <div className="flex flex-wrap items-end gap-5">
            <Button type="primary" size="xlarge" label="XLarge" showLeftIcon />
            <Button type="primary" size="large" label="Large" showRightIcon />
            <Button type="primary" size="medium" label="Medium" />
            <Button type="primary" size="small" label="Small" />
            <Button type="primary" size="xsmall" label="XSmall" />
            <Button type="primary" size="medium" label="Disabled" disabled />
          </div>
        </div>

        {/* Secondary Type */}
        <div className="mb-10">
          <h2 className="text-title-m font-bold text-text-basic mb-4">Secondary Buttons</h2>
          <div className="flex flex-wrap items-end gap-5">
            <Button type="secondary" size="xlarge" label="XLarge" showLeftIcon />
            <Button type="secondary" size="large" label="Large" showRightIcon />
            <Button type="secondary" size="medium" label="Medium" />
            <Button type="secondary" size="small" label="Small" />
            <Button type="secondary" size="xsmall" label="XSmall" />
            <Button type="secondary" size="medium" label="Disabled" disabled />
          </div>
        </div>

        {/* Tertiary Type */}
        <div className="mb-10">
          <h2 className="text-title-m font-bold text-text-basic mb-4">Tertiary Buttons</h2>
          <div className="flex flex-wrap items-end gap-5">
            <Button type="tertiary" size="xlarge" label="XLarge" showLeftIcon />
            <Button type="tertiary" size="large" label="Large" showRightIcon />
            <Button type="tertiary" size="medium" label="Medium" />
            <Button type="tertiary" size="small" label="Small" />
            <Button type="tertiary" size="xsmall" label="XSmall" />
            <Button type="tertiary" size="medium" label="Disabled" disabled />
          </div>
        </div>
        
        {/* InputExcel 컴포넌트 테스트 */}
        <div className="flex flex-col gap-6">
          <h2 className="text-display-s font-bold text-text-basic mb-4 border-b border-border-gray-light pb-2">InputExcel (고정 h-10 단위)</h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-body-l-b text-icon-basic mb-2">States</h3>
              <InputExcel placeholder="Default state" />
              <InputExcel placeholder="Focused state" state="focused" />
              <InputExcel placeholder="Completed state" state="completed" value="입력 완료" readOnly />
              <InputExcel placeholder="Error state" state="error" alertText="얼럿 메시지를 입력해 주세요" />
              <InputExcel placeholder="Disabled state" state="disabled" value="비활성화 됨" />
              <InputExcel placeholder="View state" state="view" value="읽기 전용" />
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-body-l-b text-icon-basic mb-2">With Icons & Hint</h3>
              <InputExcel 
                type="text" 
                placeholder="검색어 입력..." 
                icon="search"
              />
              <InputExcel 
                type="password" 
                placeholder="비밀번호 입력..." 
                value={excelValue}
                onChange={(e) => setExcelValue(e.target.value)}
              />
              <InputExcel 
                placeholder="힌트가 있는 엑셀 인풋" 
                hintText="필요한 정보를 입력해 주세요"
              />
            </div>
          </div>
        </div>

        {/* Select 컴포넌트 테스트 */}
        <div className="flex flex-col gap-6">
          <h2 className="text-display-s font-bold text-text-basic mb-4 border-b border-border-gray-light pb-2">Select (셀렉트 트리거)</h2>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-body-l-b text-icon-basic mb-2">Sizes (동작 테스트)</h3>
              <Select 
                size="large" 
                label="대형 (Large - h-8)" 
                value={selectValue}
                onChange={(opt) => setSelectValue(opt.value)}
                options={[
                  { label: '옵션 1', value: '옵션 1' },
                  { label: '옵션 2', value: '옵션 2' },
                  { label: '옵션 3', value: '옵션 3' },
                ]}
                placeholder="항목을 선택하세요"
              />
              <Select 
                size="medium" 
                label="중형 (Medium - h-7)" 
                placeholder="옵션을 선택하세요" 
                value={selectMediumValue}
                onChange={(opt) => setSelectMediumValue(opt.value)}
                options={[
                  { label: '옵션 A', value: '옵션 A' },
                  { label: '옵션 B', value: '옵션 B' }
                ]}
              />
              <Select 
                size="small" 
                label="소형 (Small - h-6)" 
                value={selectSmallValue}
                onChange={(opt) => setSelectSmallValue(opt.value)}
                options={[
                  { label: '단일 옵션', value: '단일 옵션' }
                ]}
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-body-l-b text-icon-basic mb-2">States</h3>
              <Select state="focused" label="포커스 상태" value="focused option" />
              <Select state="error" label="에러 상태" alertText="값을 선택해야 합니다." />
              <Select state="completed" label="완료 상태" value="선택 완료" />
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-body-l-b text-icon-basic mb-2">기타 (Disabled / View)</h3>
              <Select state="disabled" label="비활성화" value="선택불가" />
              <Select state="view" label="읽기 전용" value="서울시 강남구" />
              <Select state="view" label="값이 없을때" placeholder="입력 내용이 없습니다" />
            </div>
          </div>
        </div>

        {/* --- SelectExcel TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">SelectExcel (셀렉트 엑셀)</h2>
          
          <div className="grid grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-title-m mb-2">기본 동작 테스트</h3>
              <SelectExcel 
                placeholder="항목을 선택하세요" 
                value={selectExcelValue}
                onChange={(opt) => setSelectExcelValue(opt.value)}
                options={[
                  { label: '옵션 1', value: '1' },
                  { label: '옵션 2', value: '2' },
                  { label: '옵션 3', value: '3' }
                ]}
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-title-m mb-2">상태(States)</h3>
              <SelectExcel state="focused" placeholder="focused option" />
              <SelectExcel state="error" alertText="값을 선택해야 합니다." placeholder="내용을 선택하세요" />
              <SelectExcel state="completed" value="선택 완료" placeholder="선택하세요" />
            </div>
            
            <div className="flex flex-col gap-4 col-span-2">
              <h3 className="font-semibold text-title-m mb-2">기타 (Disabled / View)</h3>
              <div className="grid grid-cols-2 gap-10">
                <SelectExcel state="disabled" placeholder="선택불가" />
                <SelectExcel state="view" value="서울시 강남구" placeholder="선택불가" />
              </div>
            </div>
          </div>
        </div>

        {/* --- TabAtomic TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">TabAtomic (탭 최소단위 컴포넌트)</h2>
          
          <div className="flex flex-col gap-8">
            {/* Large TabAtomic */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-title-m text-text-basic">Large Size (h-8)</h3>
              <div className="flex flex-wrap items-center gap-4 border-b border-border-gray-light bg-surface-white pb-4 p-4">
                <TabAtomic size="large" state="active" label="활성 상태" showBadge />
                <TabAtomic size="large" state="default" label="기본 상태" showBadge />
                <TabAtomic size="large" state="hover" label="호버 상태" showBadge />
                <TabAtomic size="large" state="pressed" label="눌림 상태" />
                <TabAtomic size="large" state="disabled" label="비활성 상태" />
              </div>
            </div>

            {/* Medium TabAtomic */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-title-m text-text-basic">Medium Size (h-7)</h3>
              <div className="flex flex-wrap items-center gap-4 bg-surface-white p-4">
                <TabAtomic size="medium" state="active" label="활성 상태" showBadge />
                <TabAtomic size="medium" state="default" label="기본 상태" showBadge />
                <TabAtomic size="medium" state="hover" label="호버 상태" showBadge />
                <TabAtomic size="medium" state="pressed" label="눌림 상태" />
                <TabAtomic size="medium" state="disabled" label="비활성 상태" />
              </div>
            </div>
          </div>
        </div>

        {/* --- Tab Group TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Tab (탭 그룹 컨테이너 컴포넌트)</h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-title-m text-text-basic">Large Size + rightElement</h3>
              <div className="bg-surface-gray p-6 pt-0 rounded-md">
                <Tab 
                  size="large" 
                  tabs={dummyTabsInfo} 
                  rightElement={<Count value={1209} />}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-title-m text-text-basic">Medium Size (우측 요소 없음)</h3>
              <div className="bg-surface-gray p-6 pt-0 rounded-md">
                <Tab size="medium" tabs={dummyTabsInfo} />
              </div>
            </div>
          </div>
        </div>

        {/* --- BadgeIcon TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">BadgeIcon (아이콘형 뱃지)</h2>
          
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">pin 타입</span>
              <BadgeIcon type="pin" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">new 타입</span>
              <BadgeIcon type="new" />
            </div>
          </div>
        </div>

        {/* --- BadgeStatus TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">BadgeStatus (상태형 뱃지)</h2>
          
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">pending (승인대기)</span>
              <BadgeStatus state="pending" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">done (승인완료)</span>
              <BadgeStatus state="done" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">error (처리오류)</span>
              <BadgeStatus state="error" />
            </div>
          </div>
        </div>

        {/* --- BadgeCount TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">BadgeCount (수량형 뱃지)</h2>
          
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">new (신규)</span>
              <BadgeCount state="new" count={5} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">cancel (종료)</span>
              <BadgeCount state="cancel" count={12} />
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-label-s font-semibold text-text-subtle">total (총)</span>
              <BadgeCount state="total" count={120} />
            </div>
          </div>
        </div>

        {/* --- Count TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Count (카운트 컴포넌트)</h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-label-s font-semibold text-text-subtle">기본 (레이블 포함)</span>
                <Count label="신청 인원" value={150} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-label-s font-semibold text-text-subtle">레이블 미노출</span>
                <Count showLabel={false} value={24500} unit="원" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-label-s font-semibold text-text-subtle">단위 변경 (개)</span>
                <Count label="상품 수량" value={12} unit="개" />
              </div>
            </div>
          </div>
        </div>

        {/* --- Alert TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Alert (알럿 컴포넌트)</h2>
          
          <div className="flex flex-wrap gap-10 bg-background-gray p-10 rounded-medium justify-center">
            <div className="flex flex-col gap-4 items-center">
              <span className="text-label-s font-semibold text-text-subtle">btn1 타입 (단일 버튼)</span>
              <Alert 
                title="등록 완료" 
                text="정보가 정상적으로 등록되었습니다." 
                type="btn1" 
                onConfirm={() => alert('확인 클릭!')} 
              />
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              <span className="text-label-s font-semibold text-text-subtle">btn2 타입 (이중 버튼)</span>
              <Alert 
                title="삭제하시겠습니까?" 
                text="삭제된 데이터는 복구할 수 없습니다." 
                type="btn2" 
                confirmLabel="삭제"
                cancelLabel="취소"
                onConfirm={() => alert('삭제!')}
                onCancel={() => alert('취소!')}
              />
            </div>
          </div>
        </div>

        {/* --- Toast TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Toast (토스트 컴포넌트)</h2>
          
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-4">
              <Button 
                label="일반 토스트 (4초)" 
                type="secondary"
                size="medium"
                onClick={() => showToast('정상적으로 처리되었습니다.', false)} 
              />
              <Button 
                label="되돌리기 토스트 (8초 + 호버 정지)" 
                type="primary"
                size="medium"
                onClick={() => showToast('삭제되었습니다.', true)} 
              />
            </div>
            
            <p className="text-label-s text-text-subtle">
              * 일반 토스트는 4초 후 자동으로 사라집니다.<br/>
              * 되돌리기 토스트는 8초 후 사라지며, 마우스 호버 시 타이머가 멈춥니다.
            </p>

            <div className="relative w-[100%] h-24 bg-background-gray rounded-medium flex items-center justify-center">
              {toast.visible && (
                <Toast 
                  message={toast.message} 
                  showAction={toast.showAction}
                  actionLabel="되돌리기"
                  onAction={() => alert('되돌리기 실행!')}
                  onClose={closeToast}
                />
              )}
            </div>
          </div>
        </div>

        {/* --- Pagination TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Pagination (페이지네이션)</h2>
          
          <div className="flex flex-col gap-10 items-center py-10">
            <div className="flex flex-col gap-4 items-center">
              <p className="text-label-m text-text-gray-medium">기본형 (Total 20 pages, Max 10 slots)</p>
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              <p className="text-label-m text-text-gray-medium">소규모 페이지 (Total 5 pages)</p>
              <Pagination 
                currentPage={1}
                totalPages={5}
                onPageChange={(p) => console.log('Page:', p)}
              />
            </div>

            <div className="p-4 bg-background-gray rounded-small text-body-s text-text-subtle">
              현재 선택된 페이지: <span className="font-bold text-text-primary">{currentPage}</span> / {totalPages}
            </div>
          </div>
        </div>

        {/* --- LNB Atomic TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">LNB Atomic (LNB 메뉴 아이템)</h2>
          
          <div className="grid grid-cols-4 gap-4 bg-background-gray p-6 rounded-medium">
            <div className="text-label-s text-text-gray-medium text-center self-center">TYPE / STATE</div>
            <div className="text-label-s text-text-gray-medium text-center">Default</div>
            <div className="text-label-s text-text-gray-medium text-center">Hover</div>
            <div className="text-label-s text-text-gray-medium text-center">Selected</div>

            {/* Type 01 */}
            <div className="text-label-m font-bold self-center">01 (대시보드)</div>
            <LnbAtomic type="01" state="default" />
            <LnbAtomic type="01" state="hover" />
            <LnbAtomic type="01" state="selected" />

            {/* Type 02 */}
            <div className="text-label-m font-bold self-center">02 (고객등록)</div>
            <LnbAtomic type="02" state="default" />
            <LnbAtomic type="02" state="hover" />
            <LnbAtomic type="02" state="selected" />

            {/* Type 03 */}
            <div className="text-label-m font-bold self-center">03 (고객현황)</div>
            <LnbAtomic type="03" state="default" />
            <LnbAtomic type="03" state="hover" />
            <LnbAtomic type="03" state="selected" />

            {/* Type 04 */}
            <div className="text-label-m font-bold self-center">04 (담당자관리)</div>
            <LnbAtomic type="04" state="default" />
            <LnbAtomic type="04" state="hover" />
            <LnbAtomic type="04" state="selected" />

            {/* Type 05 */}
            <div className="text-label-m font-bold self-center">05 (공지사항)</div>
            <LnbAtomic type="05" state="default" />
            <LnbAtomic type="05" state="hover" />
            <LnbAtomic type="05" state="selected" />
          </div>
        </div>

        {/* --- LNB Layout TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">LNB (메가 메뉴 사이드바)</h2>
          <p className="text-text-subtle">상단 패딩(pt-6, 16px) 변수가 적용된 통합 사이드바입니다. 메뉴를 클릭하여 상태 전환을 테스트해보세요.</p>
          
          <div className="flex gap-10 bg-background-gray p-6 rounded-medium min-h-[500px]">
            {/* 실제 LNB 데모 */}
            <Lnb 
              activeType={lnbActiveType} 
              onMenuClick={(type) => setLnbActiveType(type)}
              className="!min-h-0 h-[450px]"
            />
            
            {/* 콘텐츠 영역 더미 */}
            <div className="flex-1 bg-surface-white rounded-small p-8 flex flex-col gap-4">
              <h3 className="text-title-m-b">현재 활성화된 메뉴: {lnbActiveType}</h3>
              <div className="w-[100%] h-4 bg-background-gray rounded-max" />
              <div className="w-[75%] h-4 bg-background-gray rounded-max" />
              <div className="w-[50%] h-4 bg-background-gray rounded-max" />
            </div>
          </div>
        </div>

        {/* --- Checkbox TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Checkbox (체크박스)</h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-10">
              <div className="flex flex-col gap-3">
                <span className="text-label-s font-semibold text-text-disabled">기본 상태</span>
                <Checkbox label="미체크" checked={check1} onChange={setCheck1} />
                <Checkbox label="체크됨" checked={check2} onChange={setCheck2} />
              </div>
              
              <div className="flex flex-col gap-3">
                <span className="text-label-s font-semibold text-text-disabled">비활성화 상태</span>
                <Checkbox label="비활성 미체크" checked={false} disabled />
                <Checkbox label="비활성 체크됨" checked={true} disabled />
              </div>
            </div>
          </div>
        </div>

        {/* --- AccordionTrigger TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Accordion Trigger (아코디언 트리거)</h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-label-s font-semibold text-text-disabled">상호작용 가능한 데모 (클릭해 보세요!)</span>
              <div className="flex items-center gap-4">
                <AccordionTrigger 
                  type={accordionOpen ? 'open' : 'close'} 
                  onClick={() => setAccordionOpen(!accordionOpen)} 
                />
                <span className="text-label-m-m text-text-basic">
                  {accordionOpen ? '열림 상태 (Chevron Down)' : '닫힘 상태 (Chevron Up)'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-label-s font-semibold text-text-disabled">피그마 공식 6가지 상태 명세</span>
              <div className="grid grid-cols-2 gap-6 bg-surface-gray p-6 rounded-medium border border-border-gray-light max-w-[440px]">
                {/* Close type: chevron up */}
                <div className="flex flex-col gap-3 items-center">
                  <span className="text-body-s-m text-text-subtle">Close Type (Chevron Up)</span>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center gap-1">
                      <AccordionTrigger type="close" state="default" />
                      <span className="text-caption text-text-disabled">Default</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <AccordionTrigger type="close" state="hover" />
                      <span className="text-caption text-text-disabled">Hover</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <AccordionTrigger type="close" state="pressed" />
                      <span className="text-caption text-text-disabled">Pressed</span>
                    </div>
                  </div>
                </div>

                {/* Open type: chevron down */}
                <div className="flex flex-col gap-3 items-center">
                  <span className="text-body-s-m text-text-subtle">Open Type (Chevron Down)</span>
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col items-center gap-1">
                      <AccordionTrigger type="open" state="default" />
                      <span className="text-caption text-text-disabled">Default</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <AccordionTrigger type="open" state="hover" />
                      <span className="text-caption text-text-disabled">Hover</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <AccordionTrigger type="open" state="pressed" />
                      <span className="text-caption text-text-disabled">Pressed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Modal TEST --- */}
        <div className="w-[100%] max-w-[896px] bg-surface-white rounded-lg shadow-sm p-8 flex flex-col gap-8">
          <h2 className="text-title-l font-bold border-b pb-4">Modal (모달 컴포넌트)</h2>
          
          <div className="flex flex-wrap gap-4">
            <Button label="1컬럼 모달 열기" onClick={() => openModal('1column')} />
            <Button label="2컬럼 모달 열기" onClick={() => openModal('2columns')} />
            <Button label="탭형 모달 열기" onClick={() => openModal('tab')} />
            <Button type="secondary" label="인증형 모달 열기 (PNG 아이콘 포함)" onClick={() => openModal('auth')} />
          </div>

          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            type={modalType}
            title={
              modalType === 'auth' ? '본인인증' : 
              modalType === '2columns' ? '사용자 정보 수정' : 
              modalType === 'tab' ? '상세 정보' : '알림'
            }
            subText={
              modalType === 'auth' ? '인증 방식을 선택해 주세요.' : 
              modalType === '1column' ? '입력된 정보를 다시 한번 확인해주세요.' : undefined
            }
          >
            {modalType === '1column' && (
              <div className="flex flex-col gap-4">
                <InputRow label="이름" placeholder="이름을 입력하세요" size="medium" />
                <InputRow label="연락처" placeholder="010-0000-0000" size="medium" />
              </div>
            )}
            {modalType === '2columns' && (
              <>
                <InputRow label="닉네임" placeholder="닉네임" size="medium" />
                <InputRow label="이메일" placeholder="test@abc.com" size="medium" />
                <InputRow label="가입일" state="view" value="2023.10.12" size="medium" />
                <InputRow label="상태" state="view" value="정상" size="medium" />
              </>
            )}
          </Modal>
        </div>
        
      </div>
    </div>
    
    {/* 피그마 연동 Footer 컴포넌트 */}
    <Footer />
  </div>
  );
}

export default App;
