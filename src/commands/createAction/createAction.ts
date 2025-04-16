import { createProject } from '@/libs';
import { ActionArgsType, ActionCommandType, CreateProjectParams } from '@/types';
import { runActionArgTemplate } from './runActionArgTemplate';
import { runActionArgName } from './runActionArgName';
import { getCreateRemoveList } from './getCreateRemoveList';
import { getCreateExecList } from './getCreateExecList';

export async function createAction(name?: string, actionArgs?: ActionArgsType) {
  try {
    const actionArgsParams = actionArgs ?? {};
    console.log('🚀 開始建立專案...');
    console.log('🛠️ 讀取專案參數...');
    const projectName = await runActionArgName(name);

    const template = await runActionArgTemplate(actionArgsParams.template as string);

    const removeList = getCreateRemoveList(actionArgsParams);
    const execList = getCreateExecList(actionArgsParams);

    const params: CreateProjectParams = {
      name: projectName,
      template,
      removeList,
      execList,
    };

    await createProject(params);
  } catch (error: unknown) {
    if ((error as { name?: string })?.name === 'ExitPromptError') {
      console.log('👋 使用者中斷了輸入（Ctrl+C）');
      process.exit(0);
    } else {
      console.error('❌ 發生錯誤:', error);
      throw error;
    }
  }
}

export const createActionCommand: ActionCommandType = {
  name: 'create',
  description: '從 GitHub 模板建立新專案 (Default)',
  flagsOptions: [
    {
      flags: '-t, --template <repo>',
      description: 'GitHub 模板，如 user/repo',
    },
    {
      flags: '--no-husky',
      description: 'remove .husky',
    },
    {
      flags: '--github',
      description: 'keep .github/workflows',
      defaultValue: false,
    },
    {
      flags: '--git-init',
      description: 'run git init',
      defaultValue: false,
    },
    {
      flags: '--npm-install',
      description: 'run npm install',
      defaultValue: false,
    },
  ],
  commandOptions: {
    isDefault: true,
  },
  action: createAction,
};
