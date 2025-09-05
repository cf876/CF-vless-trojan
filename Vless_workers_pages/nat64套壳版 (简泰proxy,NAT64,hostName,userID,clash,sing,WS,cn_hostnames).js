//แนท64自动填充พร็อกซีip，无需且不支持พร็อกซีip设置
import { connect } from "cloudflare:sockets";
const ดับเบิ้ลยูเอส_READY_STATE_OPEN = 1;
let หมายเลขผู้ใช้ = "123e4567-e89b-12d3-a456-426655440000";
const ชื่อเครื่อง = [''];
let CDNIP = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0073\u0067'
// http_ip
let IP1 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP2 = '\u0063\u0069\u0073\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP3 = '\u0061\u0066\u0072\u0069\u0063\u0061\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP4 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0073\u0067'
let IP5 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u0065\u0075\u0072\u006f\u0070\u0065\u002e\u0061\u0074'
let IP6 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u006d\u0074'
let IP7 = '\u0071\u0061\u002e\u0076\u0069\u0073\u0061\u006d\u0069\u0064\u0064\u006c\u0065\u0065\u0061\u0073\u0074\u002e\u0063\u006f\u006d'

// https_ip
let IP8 = '\u0075\u0073\u0061\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP9 = '\u006d\u0079\u0061\u006e\u006d\u0061\u0072\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP10 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0074\u0077'
let IP11 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u0065\u0075\u0072\u006f\u0070\u0065\u002e\u0063\u0068'
let IP12 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0062\u0072'
let IP13 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u0073\u006f\u0075\u0074\u0068\u0065\u0061\u0073\u0074\u0065\u0075\u0072\u006f\u0070\u0065\u002e\u0063\u006f\u006d'

// http_port
let PT1 = '80'
let PT2 = '8080'
let PT3 = '8880'
let PT4 = '2052'
let PT5 = '2082'
let PT6 = '2086'
let PT7 = '2095'

// https_port
let PT8 = '443'
let PT9 = '8443'
let PT10 = '2053'
let PT11 = '2083'
let PT12 = '2087'
let PT13 = '2096'

export default {
  /**
   * @param {any} request
   * @param {{uuid: string, พร็อกซีip: string, cdnip: string, ip1: string, ip2: string, ip3: string, ip4: string, ip5: string, ip6: string, ip7: string, ip8: string, ip9: string, ip10: string, ip11: string, ip12: string, ip13: string, pt1: string, pt2: string, pt3: string, pt4: string, pt5: string, pt6: string, pt7: string, pt8: string, pt9: string, pt10: string, pt11: string, pt12: string, pt13: string}} env
   * @param {any} ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env, ctx) {
    try {
      หมายเลขผู้ใช้ = env.uuid || หมายเลขผู้ใช้;
      CDNIP = env.cdnip || CDNIP;
	  IP1 = env.ip1 || IP1;
	  IP2 = env.ip2 || IP2;
	  IP3 = env.ip3 || IP3;
	  IP4 = env.ip4 || IP4;
	  IP5 = env.ip5 || IP5;
	  IP6 = env.ip6 || IP6;
	  IP7 = env.ip7 || IP7;
	  IP8 = env.ip8 || IP8;
	  IP9 = env.ip9 || IP9;
	  IP10 = env.ip10 || IP10;
	  IP11 = env.ip11 || IP11;
	  IP12 = env.ip12 || IP12;
	  IP13 = env.ip13 || IP13;
	  PT1 = env.pt1 || PT1;
	  PT2 = env.pt2 || PT2;
	  PT3 = env.pt3 || PT3;
	  PT4 = env.pt4 || PT4;
	  PT5 = env.pt5 || PT5;
	  PT6 = env.pt6 || PT6;
	  PT7 = env.pt7 || PT7;
	  PT8 = env.pt8 || PT8;
	  PT9 = env.pt9 || PT9;
	  PT10 = env.pt10 || PT10;
	  PT11 = env.pt11 || PT11;
	  PT12 = env.pt12 || PT12;
	  PT13 = env.pt13 || PT13;
      const upgradeHeader = request.headers.get("Upgrade");
      const url = new URL(request.url);
      if (!upgradeHeader || upgradeHeader !== "websocket") {
        const url = new URL(request.url);
        switch (url.pathname) {
          case `/${หมายเลขผู้ใช้}`: {
            const \u0076\u006c\u0065\u0073\u0073Config = get\u0076\u006c\u0065\u0073\u0073Config(หมายเลขผู้ใช้, request.headers.get("Host"));
            return new Response(`${\u0076\u006c\u0065\u0073\u0073Config}`, {
              status: 200,
              headers: {
                "Content-Type": "text/html;charset=utf-8",
              },
            });
          }
		  case `/${หมายเลขผู้ใช้}/ty`: {
			const tyConfig = gettyConfig(หมายเลขผู้ใช้, request.headers.get('Host'));
			return new Response(`${tyConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${หมายเลขผู้ใช้}/cl`: {
			const clConfig = getclConfig(หมายเลขผู้ใช้, request.headers.get('Host'));
			return new Response(`${clConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${หมายเลขผู้ใช้}/sb`: {
			const sbConfig = getsbConfig(หมายเลขผู้ใช้, request.headers.get('Host'));
			return new Response(`${sbConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				}
			});
		}
		case `/${หมายเลขผู้ใช้}/pty`: {
			const ptyConfig = getptyConfig(หมายเลขผู้ใช้, request.headers.get('Host'));
			return new Response(`${ptyConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${หมายเลขผู้ใช้}/pcl`: {
			const pclConfig = getpclConfig(หมายเลขผู้ใช้, request.headers.get('Host'));
			return new Response(`${pclConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${หมายเลขผู้ใช้}/psb`: {
			const psbConfig = getpsbConfig(หมายเลขผู้ใช้, request.headers.get('Host'));
			return new Response(`${psbConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				}
			});
		}
          default:
            // return new Response('Not found', { status: 404 });
            // For any other path, reverse พร็อกซี to 'ramdom website' and return the original response, caching it in the process
            if (ชื่อเครื่อง.includes('')) {
            return new Response(JSON.stringify(request.cf, null, 4), {
              status: 200,
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
            });
            }
            const randomHostname = ชื่อเครื่อง[Math.floor(Math.random() * ชื่อเครื่อง.length)];
            const newHeaders = new Headers(request.headers);
            newHeaders.set("cf-connecting-ip", "1.2.3.4");
            newHeaders.set("x-forwarded-for", "1.2.3.4");
            newHeaders.set("x-real-ip", "1.2.3.4");
            newHeaders.set("referer", "https://www.google.com/search?q=edtunnel");
            // Use fetch to พร็อกซี the request to 15 different domains
            const พร็อกซีUrl = "https://" + randomHostname + url.pathname + url.search;
            let modifiedRequest = new Request(พร็อกซีUrl, {
              method: request.method,
              headers: newHeaders,
              body: request.body,
              redirect: "manual",
            });
            const พร็อกซีResponse = await fetch(modifiedRequest, { redirect: "manual" });
            // Check for 302 or 301 redirect status and return an error response
            if ([301, 302].includes(พร็อกซีResponse.status)) {
              return new Response(`Redirects to ${randomHostname} are not allowed.`, {
                status: 403,
                statusText: "Forbidden",
              });
            }
            // Return the response from the พร็อกซี server
            return พร็อกซีResponse;
        }
      }
      return await handle\u0076\u006c\u0065\u0073\u0073WebSocket(request);
    } catch (err) {
      /** @type {Error} */ let e = err;
      return new Response(e.toString());
    }
  },
};

async function handle\u0076\u006c\u0065\u0073\u0073WebSocket(request) {
  const wsPair = new WebSocketPair();
  const [clientดับเบิ้ลยูเอส, serverดับเบิ้ลยูเอส] = Object.values(wsPair);

  serverดับเบิ้ลยูเอส.accept();

  const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';
  const wsReadable = createWebSocketReadableStream(serverดับเบิ้ลยูเอส, earlyDataHeader);
  let remoteSocket = null;

  let udpStreamWrite = null;
  let isDns = false;
  
  wsReadable.pipeTo(new WritableStream({
    async write(chunk) {

      if (isDns && udpStreamWrite) {
        return udpStreamWrite(chunk);
      }
      
      if (remoteSocket) {
        const writer = remoteSocket.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }

      const result = parse\u0076\u006c\u0065\u0073\u0073Header(chunk, หมายเลขผู้ใช้);
      if (result.hasError) {
        throw new Error(result.message);
      }

      const \u0076\u006c\u0065\u0073\u0073RespHeader = new Uint8Array([result.\u0076\u006c\u0065\u0073\u0073Version[0], 0]);
      const rawClientData = chunk.slice(result.rawDataIndex);
      
      if (result.isUDP) {
        if (result.portRemote === 53) {
          isDns = true;
          const { write } = await handleUDPOutBound(serverดับเบิ้ลยูเอส, \u0076\u006c\u0065\u0073\u0073RespHeader);
          udpStreamWrite = write;
          udpStreamWrite(rawClientData);
          return;
        } else {
          throw new Error('UDP代理仅支持DNS(端口53)');
        }
      }

      async function connectAndWrite(address, port) {
        const tcpSocket = await connect({
          hostname: address,
          port: port
        });
        remoteSocket = tcpSocket;
        const writer = tcpSocket.writable.getWriter();
        await writer.write(rawClientData);
        writer.releaseLock();
        return tcpSocket;
      }

      function convertToแนท64IPv6(ipv4Address) {
        const parts = ipv4Address.split('.');
        if (parts.length !== 4) {
          throw new Error('无效的IPv4地址');
        }
        
        const hex = parts.map(part => {
          const num = parseInt(part, 10);
          if (num < 0 || num > 255) {
            throw new Error('无效的IPv4地址段');
          }
          return num.toString(16).padStart(2, '0');
        });
        const prefixes = ['2602:fc59:b0:64::'];
        const chosenPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        return `[${chosenPrefix}${hex[0]}${hex[1]}:${hex[2]}${hex[3]}]`;
      }

      async function getIPv6พร็อกซีAddress(domain) {
        try {
          const dnsQuery = await fetch(`https://1.1.1.1/dns-query?name=${domain}&type=A`, {
            headers: {
              'Accept': 'application/dns-json'
            }
          });
          
          const dnsResult = await dnsQuery.json();
          if (dnsResult.Answer && dnsResult.Answer.length > 0) {
            const aRecord = dnsResult.Answer.find(record => record.type === 1);
            if (aRecord) {
              const ipv4Address = aRecord.data;
              return convertToแนท64IPv6(ipv4Address);
            }
          }
          throw new Error('无法解析域名的IPv4地址');
        } catch (err) {
          throw new Error(`DNS解析失败: ${err.message}`);
        }
      }

      async function retry() {
        try {
          const พร็อกซีIP = await getIPv6พร็อกซีAddress(result.addressRemote);
          console.log(`尝试通过แนท64 IPv6地址 ${พร็อกซีIP} 连接...`);
          const tcpSocket = await connect({
            hostname: พร็อกซีIP,
            port: result.portRemote
          });
          remoteSocket = tcpSocket;
          const writer = tcpSocket.writable.getWriter();
          await writer.write(rawClientData);
          writer.releaseLock();

          tcpSocket.closed.catch(error => {
            console.error('แนท64 IPv6连接关闭错误:', error);
          }).finally(() => {
            if (serverดับเบิ้ลยูเอส.readyState === ดับเบิ้ลยูเอส_READY_STATE_OPEN) {
              serverดับเบิ้ลยูเอส.close(1000, '连接已关闭');
            }
          });
          
          pipeRemoteToWebSocket(tcpSocket, serverดับเบิ้ลยูเอส, \u0076\u006c\u0065\u0073\u0073RespHeader, null);
        } catch (err) {
          console.error('แนท64 IPv6连接失败:', err);
          serverดับเบิ้ลยูเอส.close(1011, 'แนท64 IPv6连接失败: ' + err.message);
        }
      }

      try {
        const tcpSocket = await connectAndWrite(result.addressRemote, result.portRemote);
        pipeRemoteToWebSocket(tcpSocket, serverดับเบิ้ลยูเอส, \u0076\u006c\u0065\u0073\u0073RespHeader, retry);
      } catch (err) {
        console.error('连接失败:', err);
        serverดับเบิ้ลยูเอส.close(1011, '连接失败');
      }
    },
    close() {
      if (remoteSocket) {
        closeSocket(remoteSocket);
      }
    }
  })).catch(err => {
    console.error('WebSocket 错误:', err);
    closeSocket(remoteSocket);
    serverดับเบิ้ลยูเอส.close(1011, '内部错误');
  });

  return new Response(null, {
    status: 101,
    webSocket: clientดับเบิ้ลยูเอส,
  });
}

function createWebSocketReadableStream(ws, earlyDataHeader) {
  return new ReadableStream({
    start(controller) {
      ws.addEventListener('message', event => {
        controller.enqueue(event.data);
      });
      
      ws.addEventListener('close', () => {
        controller.close();
      });
      
      ws.addEventListener('error', err => {
        controller.error(err);
      });
      
      if (earlyDataHeader) {
        try {
          const decoded = atob(earlyDataHeader.replace(/-/g, '+').replace(/_/g, '/'));
          const data = Uint8Array.from(decoded, c => c.charCodeAt(0));
          controller.enqueue(data.buffer);
        } catch (e) {
        }
      }
    }
  });
}

function parse\u0076\u006c\u0065\u0073\u0073Header(buffer, หมายเลขผู้ใช้) {
  if (buffer.byteLength < 24) {
    return { hasError: true, message: '无效的头部长度' };
  }
  
  const view = new DataView(buffer);
  const version = new Uint8Array(buffer.slice(0, 1));
  
  const uuid = formatUUID(new Uint8Array(buffer.slice(1, 17)));
  if (uuid !== หมายเลขผู้ใช้) {
    return { hasError: true, message: '无效的用户' };
  }
  
  const optionsLength = view.getUint8(17);
  const command = view.getUint8(18 + optionsLength);

  let isUDP = false;
  if (command === 1) {

  } else if (command === 2) {

    isUDP = true;
  } else {
    return { hasError: true, message: '不支持的命令，仅支持TCP(01)和UDP(02)' };
  }
  
  let offset = 19 + optionsLength;
  const port = view.getUint16(offset);
  offset += 2;
  
  const addressType = view.getUint8(offset++);
  let address = '';
  
  switch (addressType) {
    case 1: // IPv4
      address = Array.from(new Uint8Array(buffer.slice(offset, offset + 4))).join('.');
      offset += 4;
      break;
      
    case 2: // 域名
      const domainLength = view.getUint8(offset++);
      address = new TextDecoder().decode(buffer.slice(offset, offset + domainLength));
      offset += domainLength;
      break;
      
    case 3: // IPv6
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(view.getUint16(offset).toString(16).padStart(4, '0'));
        offset += 2;
      }
      address = ipv6.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
      
    default:
      return { hasError: true, message: '不支持的地址类型' };
  }
  
  return {
    hasError: false,
    addressRemote: address,
    portRemote: port,
    rawDataIndex: offset,
    \u0076\u006c\u0065\u0073\u0073Version: version,
    isUDP
  };
}

function pipeRemoteToWebSocket(remoteSocket, ws, \u0076\u006c\u0065\u0073\u0073Header, retry = null) {
  let headerSent = false;
  let hasIncomingData = false;
  
  remoteSocket.readable.pipeTo(new WritableStream({
    write(chunk) {
      hasIncomingData = true;
      if (ws.readyState === ดับเบิ้ลยูเอส_READY_STATE_OPEN) {
        if (!headerSent) {
          const combined = new Uint8Array(\u0076\u006c\u0065\u0073\u0073Header.byteLength + chunk.byteLength);
          combined.set(new Uint8Array(\u0076\u006c\u0065\u0073\u0073Header), 0);
          combined.set(new Uint8Array(chunk), \u0076\u006c\u0065\u0073\u0073Header.byteLength);
          ws.send(combined.buffer);
          headerSent = true;
        } else {
          ws.send(chunk);
        }
      }
    },
    close() {
      if (!hasIncomingData && retry) {
        retry();
        return;
      }
      if (ws.readyState === ดับเบิ้ลยูเอส_READY_STATE_OPEN) {
        ws.close(1000, '正常关闭');
      }
    },
    abort() {
      closeSocket(remoteSocket);
    }
  })).catch(err => {
    console.error('数据转发错误:', err);
    closeSocket(remoteSocket);
    if (ws.readyState === ดับเบิ้ลยูเอส_READY_STATE_OPEN) {
      ws.close(1011, '数据传输错误');
    }
  });
}

function closeSocket(socket) {
  if (socket) {
    try {
      socket.close();
    } catch (e) {
    }
  }
}

function formatUUID(bytes) {
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}

async function handleUDPOutBound(webSocket, \u0076\u006c\u0065\u0073\u0073ResponseHeader) {
  let is\u0076\u006c\u0065\u0073\u0073HeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {
    },
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength;) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPacketLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(
          chunk.slice(index + 2, index + 2 + udpPacketLength)
        );
        index = index + 2 + udpPacketLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {
    }
  });

  transformStream.readable.pipeTo(new WritableStream({
    async write(chunk) {
      const resp = await fetch('https://1.1.1.1/dns-query',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/dns-message',
          },
          body: chunk,
        })
      const dnsQueryResult = await resp.arrayBuffer();
      const udpSize = dnsQueryResult.byteLength;
      const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
      
      if (webSocket.readyState === ดับเบิ้ลยูเอส_READY_STATE_OPEN) {
        console.log(`DNS查询成功，DNS消息长度为 ${udpSize}`);
        if (is\u0076\u006c\u0065\u0073\u0073HeaderSent) {
          webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        } else {
          webSocket.send(await new Blob([\u0076\u006c\u0065\u0073\u0073ResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          is\u0076\u006c\u0065\u0073\u0073HeaderSent = true;
        }
      }
    }
  })).catch((error) => {
    console.error('DNS UDP处理错误:', error);
  });

  const writer = transformStream.writable.getWriter();

  return {
    write(chunk) {
      writer.write(chunk);
    }
  };
}
/**
 *
 * @param {string} หมายเลขผู้ใช้
 * @param {string | null} ชื่อโฮสต์
 * @returns {string}
 */
function get\u0076\u006c\u0065\u0073\u0073Config(หมายเลขผู้ใช้, ชื่อโฮสต์) {
  const w\u0076\u006c\u0065\u0073\u0073ws = `\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${CDNIP}:8880?encryption=none&security=none&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#${ชื่อโฮสต์}`;
  const p\u0076\u006c\u0065\u0073\u0073wstls = `\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${CDNIP}:8443?encryption=none&security=tls&type=ws&host=${ชื่อโฮสต์}&sni=${ชื่อโฮสต์}&fp=random&path=%2F%3Fed%3D2560#${ชื่อโฮสต์}`;
  const note = `甬哥博客地址：https://ygkkk.blogspot.com\n甬哥YouTube频道：https://www.youtube.com/@ygkkk\n甬哥TG电报群组：https://t.me/ygkkktg\n甬哥TG电报频道：https://t.me/ygkkktgpd\n\nพร็อกซีIP使用แนท64自动生成，无需设置`;
  const ty = `https://${ชื่อโฮสต์}/${หมายเลขผู้ใช้}/ty`
  const cl = `https://${ชื่อโฮสต์}/${หมายเลขผู้ใช้}/cl`
  const sb = `https://${ชื่อโฮสต์}/${หมายเลขผู้ใช้}/sb`
  const pty = `https://${ชื่อโฮสต์}/${หมายเลขผู้ใช้}/pty`
  const pcl = `https://${ชื่อโฮสต์}/${หมายเลขผู้ใช้}/pcl`
  const psb = `https://${ชื่อโฮสต์}/${หมายเลขผู้ใช้}/psb`

  const wk\u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP1}:${PT1}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V1_${IP1}_${PT1}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP2}:${PT2}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V2_${IP2}_${PT2}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP3}:${PT3}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V3_${IP3}_${PT3}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP4}:${PT4}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V4_${IP4}_${PT4}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP5}:${PT5}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V5_${IP5}_${PT5}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP6}:${PT6}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V6_${IP6}_${PT6}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP7}:${PT7}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V7_${IP7}_${PT7}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP8}:${PT8}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP9}:${PT9}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP10}:${PT10}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP11}:${PT11}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP12}:${PT12}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP13}:${PT13}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);


  const pg\u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP8}:${PT8}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP9}:${PT9}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP10}:${PT10}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP11}:${PT11}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP12}:${PT12}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP13}:${PT13}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);	

	
  const noteshow = note.replace(/\n/g, '<br>');
  const displayHtml = `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<style>
.limited-width {
    max-width: 200px;
    overflow: auto;
    word-wrap: break-word;
}
</style>
</head>
<script>
function copyToClipboard(text) {
  const input = document.createElement('textarea');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  alert('已复制到剪贴板');
}
</script>
`;
if (ชื่อโฮสต์.includes("workers.dev")) {
return `
<br>
<br>
${displayHtml}
<body>
free~
</body>
`;
  } else {
    return `
<br>
<br>
${displayHtml}
<body>
free~
</body>
`;
  }
}

function gettyConfig(หมายเลขผู้ใช้, ชื่อโฮสต์) {
	const \u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP1}:${PT1}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V1_${IP1}_${PT1}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP2}:${PT2}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V2_${IP2}_${PT2}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP3}:${PT3}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V3_${IP3}_${PT3}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP4}:${PT4}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V4_${IP4}_${PT4}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP5}:${PT5}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V5_${IP5}_${PT5}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP6}:${PT6}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V6_${IP6}_${PT6}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP7}:${PT7}?encryption=none&security=none&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V7_${IP7}_${PT7}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP8}:${PT8}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP9}:${PT9}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP10}:${PT10}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP11}:${PT11}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP12}:${PT12}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP13}:${PT13}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);
		return `${\u0076\u006c\u0065\u0073\u0073share}`
	}


function getptyConfig(หมายเลขผู้ใช้, ชื่อโฮสต์) {
	const \u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP8}:${PT8}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP9}:${PT9}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP10}:${PT10}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP11}:${PT11}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP12}:${PT12}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073\u003A//${หมายเลขผู้ใช้}\u0040${IP13}:${PT13}?encryption=none&security=tls&sni=${ชื่อโฮสต์}&fp=randomized&type=ws&host=${ชื่อโฮสต์}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);	
		return `${\u0076\u006c\u0065\u0073\u0073share}`
	}
	
function getpclConfig(หมายเลขผู้ใช้, ชื่อโฮสต์) {
return `
port: 7890
allow-lan: true
mode: rule
log-level: info
unified-delay: true
global-client-fingerprint: chrome
dns:
  enable: false
  listen: :53
  ipv6: true
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  default-nameserver: 
    - 223.5.5.5
    - 114.114.114.114
    - 8.8.8.8
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  fallback:
    - https://1.0.0.1/dns-query
    - tls://dns.google
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4

proxies:
- name: CF_V8_${IP8}_${PT8}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP8.replace(/[\[\]]/g, '')}
  port: ${PT8}
  uuid: ${หมายเลขผู้ใช้}
  udp: false
  tls: true
  network: ws
  servername: ${ชื่อโฮสต์}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${ชื่อโฮสต์}

- name: CF_V9_${IP9}_${PT9}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP9.replace(/[\[\]]/g, '')}
  port: ${PT9}
  uuid: ${หมายเลขผู้ใช้}
  udp: false
  tls: true
  network: ws
  servername: ${ชื่อโฮสต์}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${ชื่อโฮสต์}

- name: CF_V10_${IP10}_${PT10}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP10.replace(/[\[\]]/g, '')}
  port: ${PT10}
  uuid: ${หมายเลขผู้ใช้}
  udp: false
  tls: true
  network: ws
  servername: ${ชื่อโฮสต์}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${ชื่อโฮสต์}

- name: CF_V11_${IP11}_${PT11}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP11.replace(/[\[\]]/g, '')}
  port: ${PT11}
  uuid: ${หมายเลขผู้ใช้}
  udp: false
  tls: true
  network: ws
  servername: ${ชื่อโฮสต์}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${ชื่อโฮสต์}

- name: CF_V12_${IP12}_${PT12}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP12.replace(/[\[\]]/g, '')}
  port: ${PT12}
  uuid: ${หมายเลขผู้ใช้}
  udp: false
  tls: true
  network: ws
  servername: ${ชื่อโฮสต์}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${ชื่อโฮสต์}

- name: CF_V13_${IP13}_${PT13}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP13.replace(/[\[\]]/g, '')}
  port: ${PT13}
  uuid: ${หมายเลขผู้ใช้}
  udp: false
  tls: true
  network: ws
  servername: ${ชื่อโฮสต์}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${ชื่อโฮสต์}

พร็อกซี-groups:
- name: 负载均衡
  type: load-balance
  url: http://www.gstatic.com/generate_204
  interval: 300
  proxies:
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

- name: 自动选择
  type: url-test
  url: http://www.gstatic.com/generate_204
  interval: 300
  tolerance: 50
  proxies:
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

- name: 🌍选择代理
  type: select
  proxies:
    - 负载均衡
    - 自动选择
    - DIRECT
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

rules:
  - GEOIP,LAN,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,🌍选择代理`
}
		
function getpsbConfig(หมายเลขผู้ใช้, ชื่อโฮสต์) {
return `{
		  "log": {
			"disabled": false,
			"level": "info",
			"timestamp": true
		  },
		  "experimental": {
			"Cแคลช_api": {
			  "external_controller": "127.0.0.1:9090",
			  "external_ui": "ui",
			  "external_ui_download_url": "",
			  "external_ui_download_detour": "",
			  "secret": "",
			  "default_mode": "Rule"
			},
			"cache_file": {
			  "enabled": true,
			  "path": "cache.db",
			  "store_fakeip": true
			}
		  },
		  "dns": {
			"servers": [
			  {
				"tag": "พร็อกซีdns",
				"address": "tls://8.8.8.8/dns-query",
				"detour": "select"
			  },
			  {
				"tag": "localdns",
				"address": "h3://223.5.5.5/dns-query",
				"detour": "direct"
			  },
			  {
				"tag": "dns_fakeip",
				"address": "fakeip"
			  }
			],
			"rules": [
			  {
				"outbound": "any",
				"server": "localdns",
				"disable_cache": true
			  },
			  {
				"Cแคลช_mode": "Global",
				"server": "พร็อกซีdns"
			  },
			  {
				"Cแคลช_mode": "Direct",
				"server": "localdns"
			  },
			  {
				"rule_set": "geosite-cn",
				"server": "localdns"
			  },
			  {
				"rule_set": "geosite-geolocation-!cn",
				"server": "พร็อกซีdns"
			  },
			  {
				"rule_set": "geosite-geolocation-!cn",
				"query_type": [
				  "A",
				  "AAAA"
				],
				"server": "dns_fakeip"
			  }
			],
			"fakeip": {
			  "enabled": true,
			  "inet4_range": "198.18.0.0/15",
			  "inet6_range": "fc00::/18"
			},
			"independent_cache": true,
			"final": "พร็อกซีdns"
		  },
		  "inbounds": [
			{
			  "type": "tun",
                        "tag": "tun-in",
		  "address": [
                    "172.19.0.1/30",
		    "fd00::1/126"
      ],
			  "auto_route": true,
			  "strict_route": true,
			  "sniff": true,
			  "sniff_override_destination": true,
			  "domain_strategy": "prefer_ipv4"
			}
		  ],
		  "outbounds": [
			{
			  "tag": "select",
			  "type": "selector",
			  "default": "auto",
			  "outbounds": [
				"auto",
				"CF_V8_${IP8}_${PT8}",
				"CF_V9_${IP9}_${PT9}",
				"CF_V10_${IP10}_${PT10}",
				"CF_V11_${IP11}_${PT11}",
				"CF_V12_${IP12}_${PT12}",
				"CF_V13_${IP13}_${PT13}"
			  ]
			},
			{
			  "server": "${IP8}",
			  "server_port": ${PT8},
			  "tag": "CF_V8_${IP8}_${PT8}",
			  "tls": {
				"enabled": true,
				"server_name": "${ชื่อโฮสต์}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${ชื่อโฮสต์}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${หมายเลขผู้ใช้}"
			},
			{
			  "server": "${IP9}",
			  "server_port": ${PT9},
			  "tag": "CF_V9_${IP9}_${PT9}",
			  "tls": {
				"enabled": true,
				"server_name": "${ชื่อโฮสต์}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${ชื่อโฮสต์}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${หมายเลขผู้ใช้}"
			},
			{
			  "server": "${IP10}",
			  "server_port": ${PT10},
			  "tag": "CF_V10_${IP10}_${PT10}",
			  "tls": {
				"enabled": true,
				"server_name": "${ชื่อโฮสต์}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${ชื่อโฮสต์}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${หมายเลขผู้ใช้}"
			},
			{
			  "server": "${IP11}",
			  "server_port": ${PT11},
			  "tag": "CF_V11_${IP11}_${PT11}",
			  "tls": {
				"enabled": true,
				"server_name": "${ชื่อโฮสต์}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${ชื่อโฮสต์}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${หมายเลขผู้ใช้}"
			},
			{
			  "server": "${IP12}",
			  "server_port": ${PT12},
			  "tag": "CF_V12_${IP12}_${PT12}",
			  "tls": {
				"enabled": true,
				"server_name": "${ชื่อโฮสต์}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${ชื่อโฮสต์}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${หมายเลขผู้ใช้}"
			},
			{
			  "server": "${IP13}",
			  "server_port": ${PT13},
			  "tag": "CF_V13_${IP13}_${PT13}",
			  "tls": {
				"enabled": true,
				"server_name": "${ชื่อโฮสต์}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${ชื่อโฮสต์}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${หมายเลขผู้ใช้}"
			},
			{
			  "tag": "direct",
			  "type": "direct"
			},
			{
			  "tag": "auto",
			  "type": "urltest",
			  "outbounds": [
				"CF_V8_${IP8}_${PT8}",
				"CF_V9_${IP9}_${PT9}",
				"CF_V10_${IP10}_${PT10}",
				"CF_V11_${IP11}_${PT11}",
				"CF_V12_${IP12}_${PT12}",
				"CF_V13_${IP13}_${PT13}"
			  ],
			  "url": "https://www.gstatic.com/generate_204",
			  "interval": "1m",
			  "tolerance": 50,
			  "interrupt_exist_connections": false
			}
		  ],
		  "route": {
			"rule_set": [
			  {
				"tag": "geosite-geolocation-!cn",
				"type": "remote",
				"format": "binary",
				"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs",
				"download_detour": "select",
				"update_interval": "1d"
			  },
			  {
				"tag": "geosite-cn",
				"type": "remote",
				"format": "binary",
				"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs",
				"download_detour": "select",
				"update_interval": "1d"
			  },
			  {
				"tag": "geoip-cn",
				"type": "remote",
				"format": "binary",
				"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs",
				"download_detour": "select",
				"update_interval": "1d"
			  }
			],
			"auto_detect_interface": true,
			"final": "select",
			"rules": [
                          {
                         "inbound": "tun-in",
                          "action": "sniff"
                          },
                          {
                          "protocol": "dns",
                          "action": "hijack-dns"
                           },
                          {
                           "port": 443,
                          "network": "udp",
                          "action": "reject"
                          },
			  {
				"Cแคลช_mode": "Direct",
				"outbound": "direct"
			  },
			  {
				"Cแคลช_mode": "Global",
				"outbound": "select"
			  },
			  {
				"rule_set": "geoip-cn",
				"outbound": "direct"
			  },
			  {
				"rule_set": "geosite-cn",
				"outbound": "direct"
			  },
			  {
				"ip_is_private": true,
				"outbound": "direct"
			  },
			  {
				"rule_set": "geosite-geolocation-!cn",
				"outbound": "select"
			  }
			]
		  },
		  "ntp": {
			"enabled": true,
			"server": "time.apple.com",
			"server_port": 123,
			"interval": "30m",
			"detour": "direct"
		  }
		}`;
} 
