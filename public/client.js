// クライアントからサーバーへの接続要求
const socket = io.connect();

// 接続時の処理
// ・サーバーとクライアントの接続が確立すると、
// 　サーバー側で、'connection'イベント
// 　クライアント側で、'connect'イベントが発生する
socket.on(
    'connect',
    () =>
    {
        console.log( 'connect' );
    } );

// 「Send」ボタンを押したときの処理
$( 'form' ).submit(
    () =>
    {
        console.log( '#input_message :', $( '#input_message' ).val() );

        if( $( '#input_message' ).val() )
        {
            // サーバーに、イベント名'new message' で入力テキストを送信
            socket.emit( 'new message', $( '#input_message' ).val() );

            $( '#input_message' ).val( '' );    // テキストボックスを空に。
        }
        return false;   // フォーム送信はしない
    } );

// サーバーからのメッセージ拡散に対する処理
// ・サーバー側のメッセージ拡散時の「io.emit( 'spread message', strMessage );」に対する処理
socket.on(
    'spread message',
    ( strMessage ) =>
    {
        console.log( 'spread message :', strMessage );

        // 拡散されたメッセージをメッセージリストに追加
        const li_element = $( '<li>' ).text( strMessage );
        $( '#message_list' ).prepend( li_element ); // リストの一番上に追加
        //$( '#message_list' ).append( li_element );    // リストの一番下に追加
    } );
