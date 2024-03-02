import { BoardResult, BoardResultLog } from '../logics/BoardResult';
import { toDisplayNumber } from '../utils/toDisplayNumber';

function ResultLogRow({ log }: {
  log: BoardResultLog
}) {
  const chipBgColor =
      log.type === 'balanced' ? 'bg-purple-600' :
      'bg-blue-600';

    const multBgColor =
      log.type === 'balanced' ? 'bg-purple-600' :
      'bg-red-600';

    const multTextColor =
      log.type === 'balanced' ? 'text-purple-600' :
      'text-red-600';

    const bgColor =
      log.type === 'chip' ? 'bg-blue-600/20' :
      log.type === 'mult' ? 'bg-red-600/20' :
      log.type === 'retrigger' ? 'bg-amber-600/20' :
      log.type === 'balanced' ? 'bg-purple-600/20' :
      'bg-gray-500/20';

  return (
    <div className={`flex justify-between gap-1 pl-1 rounded ${bgColor}`}>
      <div className="flex-grow">
        {log.subject && <span>{log.subject}: </span>}
        {log.event}
      </div>
      <div className={`${chipBgColor} rounded w-16 px-1 text-right`}>
        {toDisplayNumber(log.chips)}
      </div>
      <div className={`${multTextColor}`}>x</div>
      <div className={`${multBgColor} rounded w-16 px-1`}>
        {toDisplayNumber(log.mults)}
      </div>
    </div>
  );
}

export function ResultLogs({ result }: {
  result: BoardResult;
}) {
  return (
    <div className="flex flex-col gap-1 text-xs my-4">
      {result.logs.map((log, i) => (
        <ResultLogRow key={i} log={log} />
      ))}
    </div>
  );
}
