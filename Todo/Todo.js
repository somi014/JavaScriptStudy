// DOM 요소 선택
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// 할 일 추가 함수
function addTodo()
{
    const todoText = todoInput.value.trim();

    if (todoText === '')
    {
        alert('할 일을 입력하세요.');
        return;
    }

    // li 요소 생성
    const li = document.createElement('li');
    li.textContent = todoText;

    // 완료 버튼 생성
    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.onclick = () =>
    {
        li.classList.toggle('completed');
    };

    // 삭제 버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = () =>
    {
        todoList.removeChild(li);
    };

    // li 요소에 버튼 추가
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // 할 일 목록에 li 추가
    todoList.appendChild(li);

    // 입력 필드 초기화
    todoInput.value = '';
}

// 추가 버튼 클릭 이벤트
addButton.addEventListener('click', addTodo);

// 엔터키 입력 시 할 일 추가
todoInput.addEventListener('keypress', (event) =>
{
    if (event.key === 'Enter')
    {
        addTodo();
    }
});
