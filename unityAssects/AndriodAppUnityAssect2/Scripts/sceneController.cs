using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class sceneController : MonoBehaviour
{

    public void MainScene()
    {
        SceneManager.LoadScene("mainScene");
    }

    public void ARScene()
    {
        SceneManager.LoadScene("ArScene");
    }

    public void QuitApp()
    {
        Application.Quit();
    }
}
