import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MarkAsReadSvg: React.FC = () => {
  return (
    <Svg
      width={93}
      height={18}
      fill='none'
    >
      <Path
        fill='#123258'
        d='m14.206 6.688-6-4a.381.381 0 0 0-.412 0l-6 4A.375.375 0 0 0 1.625 7v6.5a.875.875 0 0 0 .875.875h11a.875.875 0 0 0 .875-.875V7a.375.375 0 0 0-.169-.312ZM8 3.45l5.338 3.563-4.37 3.112H7.032L2.662 7.013 8 3.45Zm5.5 10.175h-11a.125.125 0 0 1-.125-.125V7.725l4.319 3.081a.375.375 0 0 0 .212.07h2.188c.076-.002.15-.026.212-.07l4.319-3.08V13.5a.125.125 0 0 1-.125.125ZM23.625 13V4.54h1.044l3.132 5.844 3.12-5.844h1.02V13h-1.116V6.796l-2.652 4.908h-.756L24.753 6.82V13h-1.128Zm12.052.108c-.408 0-.772-.08-1.092-.24a2.033 2.033 0 0 1-.768-.648 1.61 1.61 0 0 1-.276-.924c0-.432.108-.772.324-1.02.224-.248.588-.428 1.092-.54.512-.112 1.2-.168 2.064-.168h.408v-.312c0-.456-.096-.784-.288-.984-.192-.2-.508-.3-.948-.3-.336 0-.672.052-1.008.156a4.18 4.18 0 0 0-1.032.468l-.372-.852c.304-.216.684-.388 1.14-.516a4.839 4.839 0 0 1 1.308-.192c.8 0 1.392.192 1.776.576.384.376.576.968.576 1.776V13h-1.14v-.972c-.144.336-.368.6-.672.792-.304.192-.668.288-1.092.288Zm.24-.864c.432 0 .792-.152 1.08-.456.288-.304.432-.688.432-1.152v-.324h-.396c-.584 0-1.044.028-1.38.084-.328.056-.564.152-.708.288-.136.128-.204.308-.204.54 0 .304.104.552.312.744.208.184.496.276.864.276ZM40.25 13V7.144h1.176v1.044c.304-.696.936-1.084 1.896-1.164L43.718 7l.084 1.032-.732.072c-1.064.104-1.596.652-1.596 1.644V13H40.25Zm4.477 0V4.54h1.212V9.7h.024l2.544-2.556h1.5l-2.808 2.82L50.223 13h-1.512l-2.748-2.676h-.024V13h-1.212Zm11.212.108c-.408 0-.772-.08-1.092-.24a2.033 2.033 0 0 1-.768-.648 1.61 1.61 0 0 1-.276-.924c0-.432.108-.772.324-1.02.224-.248.588-.428 1.092-.54.512-.112 1.2-.168 2.064-.168h.408v-.312c0-.456-.096-.784-.288-.984-.192-.2-.508-.3-.948-.3-.336 0-.672.052-1.008.156a4.18 4.18 0 0 0-1.032.468l-.372-.852c.304-.216.684-.388 1.14-.516a4.839 4.839 0 0 1 1.308-.192c.8 0 1.392.192 1.776.576.384.376.576.968.576 1.776V13h-1.14v-.972c-.144.336-.368.6-.672.792-.304.192-.668.288-1.092.288Zm.24-.864c.432 0 .792-.152 1.08-.456.288-.304.432-.688.432-1.152v-.324h-.396c-.584 0-1.044.028-1.38.084-.328.056-.564.152-.708.288-.136.128-.204.308-.204.54 0 .304.104.552.312.744.208.184.496.276.864.276Zm6.385.864c-.48 0-.928-.06-1.344-.18a3.123 3.123 0 0 1-1.044-.528l.348-.816c.296.208.62.368.972.48.36.112.72.168 1.08.168.424 0 .744-.076.96-.228a.712.712 0 0 0 .324-.612c0-.208-.072-.368-.216-.48-.144-.12-.36-.212-.648-.276l-1.14-.228c-1.008-.208-1.512-.728-1.512-1.56 0-.552.22-.992.66-1.32.44-.328 1.016-.492 1.728-.492.408 0 .796.06 1.164.18.376.12.688.3.936.54l-.348.816a2.584 2.584 0 0 0-.828-.48 2.722 2.722 0 0 0-.924-.168c-.416 0-.732.08-.948.24a.723.723 0 0 0-.324.624c0 .4.264.656.792.768l1.14.228c.52.104.912.28 1.176.528.272.248.408.584.408 1.008 0 .56-.22 1-.66 1.32-.44.312-1.024.468-1.752.468ZM69.477 13V7.144h1.176v1.044c.304-.696.936-1.084 1.896-1.164L72.945 7l.084 1.032-.732.072c-1.064.104-1.596.652-1.596 1.644V13h-1.224Zm7.142.108c-.96 0-1.716-.268-2.267-.804-.553-.544-.829-1.284-.829-2.22 0-.6.12-1.128.36-1.584a2.711 2.711 0 0 1 1.02-1.08c.432-.256.928-.384 1.488-.384.808 0 1.444.26 1.908.78.464.512.697 1.22.697 2.124v.408H74.7c.087 1.216.731 1.824 1.931 1.824.337 0 .665-.052.984-.156.329-.104.636-.276.925-.516l.36.84c-.265.24-.605.428-1.02.564a4.032 4.032 0 0 1-1.26.204Zm-.18-5.22c-.503 0-.903.156-1.2.468-.296.312-.476.728-.54 1.248h3.276c-.023-.544-.167-.964-.431-1.26-.264-.304-.632-.456-1.105-.456Zm5.75 5.22c-.408 0-.772-.08-1.092-.24a2.033 2.033 0 0 1-.768-.648 1.61 1.61 0 0 1-.276-.924c0-.432.108-.772.324-1.02.224-.248.588-.428 1.092-.54.512-.112 1.2-.168 2.064-.168h.408v-.312c0-.456-.096-.784-.288-.984-.192-.2-.508-.3-.948-.3-.336 0-.672.052-1.008.156a4.18 4.18 0 0 0-1.032.468l-.372-.852c.304-.216.684-.388 1.14-.516a4.839 4.839 0 0 1 1.308-.192c.8 0 1.392.192 1.776.576.384.376.576.968.576 1.776V13h-1.14v-.972c-.144.336-.368.6-.672.792-.304.192-.668.288-1.092.288Zm.24-.864c.432 0 .792-.152 1.08-.456.288-.304.432-.688.432-1.152v-.324h-.396c-.584 0-1.044.028-1.38.084-.328.056-.564.152-.708.288-.136.128-.204.308-.204.54 0 .304.104.552.312.744.208.184.496.276.864.276Zm6.565.864c-.512 0-.964-.12-1.356-.36a2.49 2.49 0 0 1-.9-1.056c-.216-.456-.324-.996-.324-1.62 0-.624.108-1.16.324-1.608a2.49 2.49 0 0 1 .9-1.056c.384-.248.836-.372 1.356-.372.44 0 .832.096 1.176.288.344.192.6.452.768.78V4.54h1.212V13h-1.188v-1.02a1.856 1.856 0 0 1-.78.828c-.344.2-.74.3-1.188.3Zm.312-.936c.496 0 .896-.18 1.2-.54.304-.36.456-.88.456-1.56s-.152-1.196-.456-1.548c-.304-.36-.704-.54-1.2-.54-.504 0-.908.18-1.212.54-.304.352-.456.868-.456 1.548s.152 1.2.456 1.56c.304.36.708.54 1.212.54Z'
      />
    </Svg>
  );
};

export default MarkAsReadSvg;
